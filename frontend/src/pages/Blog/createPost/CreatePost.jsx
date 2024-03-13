import {
  Box,
  styled,
  FormControl,
  Input,
  Button,
  InputBase,
  TextareaAutosize,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { blogData } from "../hooks/DataProvider";
import { API } from "../service/api.mjs";
const url =
  "https://images.everydayhealth.com/images/arthritis/ankylosing-spondylitis/cs-prevent-as-back-pain-working-from-home-1440x810.jpg?sfvrsn=1dc5eb66_5";

const Image = styled("img")({
  height: "70vh",
  width: "100%",
  objectFit: "cover",
});

const Container = styled(Box)`
  margin: 50px 100px;
`;

const FormControlBase = styled(FormControl)`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
`;
const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 50px;
  border: none;
  font-size: 18px;
  &: focus-visible {
    outline: none;
  }
`;

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  category: "",
  createdAtDate: new Date(),
};

export const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const location = useLocation();
  const { userData } = useContext(blogData);
  const navigate = useNavigate();

  //function for handle change

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: [e.target.value] });
  };
  const handlePictureChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function savePost() {
    const response = await API.createPost(post);
    if (response) {
      navigate("/blog");
    }
  }

  //useEffect
  useEffect(() => {
    const getImage = async () => {
      try {
        if (file) {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          //Api callling
          const response = await API.uploadFile(data);

          post.picture = response.Data.ImageUrl;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getImage();
    post.username = userData.name;
    post.category = location.search?.split("=")[1] || "All";
  }, [file]);

  return (
    <Container>
      <Image src={post.picture ? post.picture : url} alt="banner" />
      <FormControlBase>
        <label htmlFor="my-input-file">
          <Add fontSize="large" color="action" />
        </label>
        <Input
          type="file"
          name="file"
          id="my-input-file"
          style={{ display: "none" }}
          onChange={(e) => {
            handlePictureChange(e);
          }}
        />
        <InputTextField
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Button
          variant="contained"
          onClick={() => {
            savePost();
          }}
        >
          Publish
        </Button>
      </FormControlBase>
      <TextArea
        minRows={5}
        placeholder="tell about something...."
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Container>
  );
};
