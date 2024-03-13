export const API_NOTIFICATION_MSG = {
  loader: {
    title: "loading....",
    message: "Data is being loaded, please wait...",
  },

  success: {
    title: "success",
    message: "Data is successfully loaded",
  },
  responseFailure: {
    title: "error",
    message: "An error occured,while fetching from server",
  },
  requestFailure: {
    title: "error",
    message: "An error occured,while parsing request data",
  },
  networkFailure: {
    title: "error",
    message: "cannot connect with server,please check your internet connection",
  },
};

export const SERVICE_URL = {
  userSignUp: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  createPost: { url: "/create", method: "POST" },
};
