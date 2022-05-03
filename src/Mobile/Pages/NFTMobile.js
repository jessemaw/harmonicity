import React from "react";
import classes from "./NFTMobile.module.css";
import MobileNFTItem from "../Components/MobileNFTItem";
import Elemental from "../../assets/images/elemental-img-1.jpg";
import Remote from "../../assets/images/music-single-img.jpg";

function NFTMobile() {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>NFT GALLERY</h1>
      <MobileNFTItem
        link="https://supernovas.app/posts/fdc7678c36ab6e219deb88144ec320bf98725c34e017abe50e237d6b747d8e47?tab=created"
        img={Remote}
        itemTitle="REMOTE HUMANITIES"
        itemContent="ACOUSTIC HARMONIC PIANO FEATURING NOAH JORDAN"
      />

      <MobileNFTItem
        link="https://supernovas.app/posts/49fc111641c3b706a70efadf1576975857623f2852d78b679a4404424d6f2435"
        img={Elemental}
        itemTitle="IT'S ALL ELEMENTAL"
        itemContent="AMBIENT ACOUSTIC HARMONIC PIANO FEATURING NOAH JORDAN"
      />
    </div>
  );
}

export default NFTMobile;
