import axios from "axios";
import { API_NOTIFICATION_MSG, SERVICE_URL } from "../Constant/config.mjs";
import getAccessToken from "../utils/getAccesToken.mjs";

const API_URL = "http://localhost:4000/api/v1";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/JSON",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return {
      isTrue: true,
      Data: response.data,
    };
  } else {
    return {
      isTrue: true,
      message: response?.msg,
      code: response?.code,
      status: response?.status,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    return {
      isError: true,
      message: API_NOTIFICATION_MSG.responseFailure.message,
      code: error.response.status,
    };
  } else if (error.request) {
    return {
      isError: true,
      message: API_NOTIFICATION_MSG.requestFailure.message,
      code: "",
    };
  } else {
    return {
      isError: true,
      message: API_NOTIFICATION_MSG.networkFailure.message,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
  API[key] = (body, showuploadingProgress, showdownloadingProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      headers: {
        authorization: getAccessToken(),
      },
      onuploadProgress: function (progressEvent) {
        if (showuploadingProgress) {
          const percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showuploadingProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showdownloadingProgress) {
          const percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showdownloadingProgress(percentageCompleted);
        }
      },
    });
}

export { API };
