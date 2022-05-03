import React from "react";
import classes from "./HomeItems.module.css";
import { Link } from "react-router-dom";

function HomeItems(props) {
  return (
    <div className="home-item">
        <div className={classes.box}>
        <Link to={props.link}>
          <img className="home-images" src={props.img} alt="homeItem_img" />
          <h2>{props.itemTitle}</h2>
          <p>{props.itemContent}</p>
          </Link>
        </div>
    </div>
  );
}

export default HomeItems;
