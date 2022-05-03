import React from "react";
import classes from "./Nft.module.css";
import ContentCard from "../UI/ContentCard";
import NFTItem from "../components/NFTItem";
import Elemental from "../assets/images/elemental-img-1.jpg";
import Remote from "../assets/images/music-single-img.jpg";

function Nft() {
  return (
    <ContentCard>
      <div className={classes.container}>
        <h1 className={classes.heading}>NFT GALLERY</h1>
        <NFTItem
          link="https://diamondapp.com/posts/fdc7678c36ab6e219deb88144ec320bf98725c34e017abe50e237d6b747d8e47?feedTab=Following&tab=posts"
          img={Remote}
          itemTitle="REMOTE HUMANITIES"
          itemContent="ACOUSTIC HARMONIC PIANO FEATURING NOAH JORDAN"
        />

        <NFTItem
          link="https://diamondapp.com/posts/49fc111641c3b706a70efadf1576975857623f2852d78b679a4404424d6f2435?feedTab=Following&tab=posts"
          img={Elemental}
          itemTitle="IT'S ALL ELEMENTAL"
          itemContent="AMBIENT ACOUSTIC HARMONIC PIANO FEATURING NOAH JORDAN"
        />
      </div>
    </ContentCard>
  );
}

export default Nft;
