import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import React from 'react';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/banner1.jpg)`, // Assuming banner2.jpg is in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 400,
  },
  bannerContent: {
    height: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#fff",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banners() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            CryptoSpot
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banners;
