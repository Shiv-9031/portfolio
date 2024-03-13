import { useContext } from "react";
import { blogData } from "../../hooks/DataProvider";
import Banner from "../../component/Banner";
import Category from "../../component/Category";
import { Grid } from "@mui/material";

function Home() {
  const { userData } = useContext(blogData);
  console.log(userData);
  return (
    <>
      <Banner />
      <br />
      <Grid container>
        <Grid item sm={2} xs={12} lg={2}>
          <Category />
        </Grid>
        <Grid container item sm={10} xs={12} lg={10}>
          Post
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
