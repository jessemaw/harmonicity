import React from "react";
import classes from "./MobileNFTItem.module.css";

function NFTItem(props) {
  return (
    <div className={classes.item}>
      <a className={classes.itemLink} href={props.link}>
        <div className={classes.itemBox} href={props.link}>
          <div className={classes.imgContainer}>
            <img className={classes.image} src={props.img} alt="homeItem_img" />
          </div>
          <div className={classes.contentContainer}>
            <h2 className={classes.itemTitle}>{props.itemTitle}</h2>
            <p className={classes.itemText}>{props.itemContent}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NFTItem;
