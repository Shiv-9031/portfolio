import { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";

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
function Login() {
  const [account, toggleAccount] = useState("login");

  //functions
  const toggleSignUp = () => {
    account === "login" ? toggleAccount("signUp") : toggleAccount("login");
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter user name" />
            <TextField variant="standard" label="Enter your password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Typography>OR</Typography>
            <SignupButton onClick={() => toggleSignUp()}>
              Create an Account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Enter your name" />
            <TextField variant="standard" label="Enter your username" />
            <TextField variant="standard" label="Enter your password" />
            <SignupButton>Sign Up</SignupButton>
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
