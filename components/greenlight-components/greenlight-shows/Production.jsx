import React from 'react'
import react from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PopularNowItem } from "../../popular-now/popular-item";
import GreenlightSwiper from "./GreenlightSwiper";



const Production = () => {
    return (
      <Box sx={{ ...styles.container }}>
        <Box style={styles.header}>
          <Typography
            sx={{ fontWeight: "bold" }}
            color="#fff"
            fontSize={20}
            variant="h3"
            textTransform={"uppercase"}
            letterSpacing={"2px"}
          >
            In Production
          </Typography>
        </Box>
  
        <Grid container>
          <Grid
            sx={{ ...styles.item, ...styles.flexCenter }}
            item
            sm={4}
            xs={12}
            md={2}
          >
            <Box sx={{ ...styles.seasonHead }}>
              <img
                style={styles.seasonCover}
                src={"prod1.jpg"}
                alt="season-cover"
              />
            </Box>
          </Grid>
          <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
            <Box sx={styles.title}>
              {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
              <Typography variant="h3" fontSize={20} color="#32a453">
                WATCH SECOND SEASON {">"}
              </Typography>
            </Box>
            <Box sx={{ ...styles.itemText }}>
              <Typography
                variant="h3"
                color="#fff"
                fontWeight={"bold"}
                fontSize={14}
              >
                Your exclusive studio vlog with over 100 Episodes in Season One!
              </Typography>
            </Box>
            <GreenlightSwiper />  
          </Grid>
        </Grid>
  
        <Grid container sx={{ marginTop: "50px" }}>
          <Grid
            sx={{ ...styles.item, ...styles.flexCenter }}
            item
            sm={4}
            xs={12}
            md={2}
          >
            <Box sx={{ ...styles.seasonHead }}>
              <img
                style={styles.seasonCover}
                src={"prod2.jpg"}
                alt="season-cover"
              />
            </Box>
          </Grid>
          <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
            <Box sx={styles.title}>
              {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
              <Typography variant="h3" fontSize={20} color="#32a453">
                WATCH SECOND SEASON {">"}
              </Typography>
            </Box>
            <Box sx={{ ...styles.itemText }}>
              <Typography
                variant="h3"
                color="#fff"
                fontWeight={"bold"}
                fontSize={14}
              >
                Your exclusive studio vlog with over 100 Episodes in Season One!
              </Typography>
            </Box>
            <GreenlightSwiper />
          </Grid>
        </Grid>
  
        <Grid container sx={{ marginTop: "50px" }}>
          <Grid
            sx={{ ...styles.item, ...styles.flexCenter }}
            item
            sm={4}
            xs={12}
            md={2}
          >
            <Box sx={{ ...styles.seasonHead }}>
              <img
                style={styles.seasonCover}
                src={"prod3.jpg"}
                alt="season-cover"
              />
            </Box>
          </Grid>
          <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
            <Box sx={styles.title}>
              {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
              <Typography variant="h3" fontSize={20} color="#32a453">
                WATCH SECOND SEASON {">"}
              </Typography>
            </Box>
            <Box sx={{ ...styles.itemText }}>
              <Typography
                variant="h3"
                color="#fff"
                fontWeight={"bold"}
                fontSize={14}
              >
                Your exclusive studio vlog with over 100 Episodes in Season One!
              </Typography>
            </Box>
            <GreenlightSwiper />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Production;
  
  const styles = {
    container: {
      // border: "1px solid red",
      minHeight: "800px",
      padding: "20px 100px",
    },
    header: {
      // border: "1px solid red",
      padding: "20px 0",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: {
        md: "flex-start",
        sm: "flex-start",
        xs: "center",
      },
    },
    GridContainer: {
      marginTop: {
        md: "",
      },
    },
    item: {
      // border: "1px solid blue",
      minHeight: {
        md: "400px",
        sm: "",
      },
    },
    seasonHead: {
      // border: "1px solid violet",
      height: "350px",
      width: "200px",
      borderRadius: "20px",
      backgroundSize: "cover",
    },
    flexCenter: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: {
        md: "flex-start",
        sm: "flex-start",
        xs: "center",
      },
    },
    seasonCover: {
      with: "100%",
      height: "100%",
      borderRadius: "inherit",
    },
    title: {
      // border:'1px solid red',
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    itemText: {
      //  border:'1px solid red',
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    swiperCover: {
      // border:'1px solid red',
      minHeight: "270px",
      overflowX: "scroll",
    },
  };