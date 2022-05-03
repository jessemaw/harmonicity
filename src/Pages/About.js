import React from "react";
import ContentCard from "../UI/ContentCard";
import classes from "./About.module.css";

function About() {
  return (
    <ContentCard>
      <span className={classes.blurb}>
        <h2 className={classes.blurbText}>
          At the heart of Harmonicity is Idealism - the notion that underneath
          music lies a beautiful, natural order of waves, dancing and cycling in
          perfect harmony. Harmonicity is as much a science experiment as it is
          music. Each composition is an exploration of scientific and
          mathematical ideas as they may occur through music. By combining
          multiple, intelligent mediums, new insight into the ancient principles
          underlying music and art could be attained.
        </h2>
      </span>
    </ContentCard>
  );
}

export default About;
