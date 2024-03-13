import React from "react";
import { Typography, Box, styled } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;
const SubHeading = styled(Typography)`
  font-size: 20px;
  color: #fff;
`;
function Banner() {
  return (
    <Image>
      <Heading>Blog</Heading>
      <SubHeading>Code for interview</SubHeading>
    </Image>
  );
}

export default Banner;
