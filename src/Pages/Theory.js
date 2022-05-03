import React from "react";
import ContentCard from "../UI/ContentCard";
import classes from "./Theory.module.css";
import TheoryContent from "../components/Theory/TheoryContent";
import { TheoryData } from "../components/Theory/TheoryData";

function Theory() {
  return (
    <ContentCard className={classes.blurbContainer}>
    <TheoryContent pages={TheoryData} />
    </ContentCard>
  );
}

export default Theory;
