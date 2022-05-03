import React from "react";
import classes from "./AboutMobile.module.css";

function AboutMobile() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>ABOUT</h1>
      <p className={classes.blurb}>
        At the heart of Harmonicity is Idealism - the notion that underneath
        music lies a beautiful, natural order of waves, dancing and cycling in
        perfect harmony. Harmonicity is as much a science experiment as it is
        music. Each composition is an exploration of scientific and mathematical
        ideas as they may occur through music. By combining multiple,
        intelligent mediums, new insight into the ancient principles underlying
        music and art could be attained.
      </p>
    </div>
  );
}

export default AboutMobile;
