import React, { useState } from "react";
import { TheoryData } from "./TheoryData";
import classes from "./TheoryContent.module.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const TheoryContent = ({ pages }) => {
  const [current, setCurrent] = useState(0);
  const length = pages.length;

  function nextPage() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevPage() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(pages) || pages.length <= 0) {
    return null;
  }
  return (
    <section className={classes.container}>
      <ArrowBackIosRoundedIcon className={classes.icon} onClick={prevPage} />
      {TheoryData.map((page, index) => {
        return (
          <div
            key={index}
            className={index === current ? "page active" : "page"}
          >
            {index === current && (
              <div className={classes["home-content"]}>
                <h2 className={classes.topText}>{page.topText}</h2>
                <img
                  className={classes.string}
                  src={page.image}
                  alt="music theory"
                />
                <h2 className={classes.bottomText}>{page.bottomText}</h2>
              </div>
            )}
          </div>
        );
      })}
      <ArrowForwardIosRoundedIcon className={classes.icon} onClick={nextPage} />
    </section>
  );
};

export default TheoryContent;
