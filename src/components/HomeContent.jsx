import React from "react";
import HomeItems from "./HomeItems";
import classes from "./HomeContent.module.css";
import Remote from "../assets/images/music-single-img.jpg";

function HomeContent(props) {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes["home-content"]}>
          <HomeItems
            link="/nft"
            img={Remote}
            itemTitle="NFT SINGLE"
            itemContent="Remote Humanities acoustic harmonic piano"
          />
          <HomeItems
            link="/theory"
            img="https://images.squarespace-cdn.com/content/v1/56ad3332cf80a19c489d4118/1475789681062-LIV58FO7CY6QT9D424YV/image-asset.png?format=1500w"
            itemTitle="THEORY"
            itemContent="Explore the theory behind the music"
          />

          <HomeItems
            link="/drone"
            img="https://images.squarespace-cdn.com/content/v1/56ad3332cf80a19c489d4118/1475790244245-N524NS2L1JW0N1O52AMW/image-asset.jpeg?format=750w"
            itemTitle="DRONE"
            itemContent="Train Your Ear to Hear Infinite Harmony"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeContent;
