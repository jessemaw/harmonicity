import React, {useState} from "react";
import { TheoryData } from "./TheoryData";
import classes from "./TheorySlide.module.css";

function TheorySlide(props) {
    return <React.Fragment>
    
    {TheoryData.map((page, index) => {
        return (
            <div key={index}>
            {index === props.current && (
              <div className={classes["home-content"]}>
                <h2 className={classes.blurbText}>{page.topText}</h2>
                <img
                  className={classes.string}
                  src={page.image}
                  alt="music theory"
                />
                <h2 className={classes.blurbText}>{page.bottomText}</h2>
              </div>
            )}
            </div>
        );
      })}
      </React.Fragment>
}

export default TheorySlide;