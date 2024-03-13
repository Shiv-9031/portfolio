import { useState, useContext } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { API } from "../../service/api.mjs";
import { blogData } from "../../hooks/DataProvider";
import { useNavigate } from "react-router-dom";
//const
const imageURL =
  "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

const Component = styled(Box)`
  width: 400px;
  box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.6);
  margin: auto;
`;
const Image = styled("img")({
  width: "100px",
  display: "flex",
  margin: "auto",
  padding: "50px 0 0 0",
});

const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px 25px;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  height: 50px;
  background-color: #fb641b;
  color: #ffff;
  text-transform:none,
  border-radius:2px;
  text-transform:none
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
function Login({ setUserAuthenticated }) {
  const [account, toggleAccount] = useState("login");
  const [signUp, setSignUp] = useState({});
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(blogData);
  //functions
  const toggleSignUp = () => {
    account === "login" ? toggleAccount("signUp") : toggleAccount("login");
  };

  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const onLoginValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  async function SignUp() {
    try {
      let response = await API.userSignUp(signUp);

      if (response) {
        setSignUp("");
        toggleAccount("login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onlogin() {
    try {
      let response = await API.userLogin(login);

      if (response) {
        setLogin({ username: "", password: "" });
        toggleAccount("login");
        localStorage.setItem("accessToken", `bearer ${response.Data.token}`);
        setUserData({
          name: response.Data.isUser.name,
          userName: response.Data.isUser.username,
        });
        setUserAuthenticated(true);

        navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter user name"
              name="userName"
              value={login.userName}
              onChange={(e) => onLoginValueChange(e)}
            />
            <TextField
              variant="standard"
              label="Enter your password"
              type="password"
              name="password"
              value={login.password}
              onChange={(e) => onLoginValueChange(e)}
            />
            <LoginButton
              variant="contained"
              onClick={() => {
                onlogin();
              }}
            >
              Login
            </LoginButton>
            <Typography>OR</Typography>
            <SignupButton onClick={() => toggleSignUp()}>
              Create an Account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter your name"
              name="name"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              variant="standard"
              label="Enter your username"
              name="username"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              variant="standard"
              label="Enter your password"
              name="password"
              type="password"
              onChange={(e) => onInputChange(e)}
            />
            <SignupButton onClick={() => SignUp()}>Sign Up</SignupButton>
            <Typography>OR</Typography>
            <LoginButton variant="contained" onClick={() => toggleSignUp()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
}

export default Login;
