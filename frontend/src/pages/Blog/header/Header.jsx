import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderComponent = styled(AppBar)`
  background: #ffff;
  color: #000;
`;
const HeaderContainer = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    text-decoration: none;
    color: inherit;
  }
`;
function Header() {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <Link to={"/blog"}>HOME</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
        <Link to={"/blog/login"}>LOGOUT</Link>
      </HeaderContainer>
    </HeaderComponent>
  );
}

export default Header;
