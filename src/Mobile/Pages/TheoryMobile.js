import React from "react";
import TheoryContent from "../../components/Theory/TheoryContent";
import { TheoryData } from "../../components/Theory/TheoryData";
import classes from "./TheoryMobile.module.css";

function TheoryMobile() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>THEORY</h1>
      <TheoryContent pages={TheoryData} />
    </div>
  );
}

export default TheoryMobile;
