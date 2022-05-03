import React from "react";
import ContentCard from "../UI/ContentCard";
import classes from "./NotFound.module.css";

function NotFound() {
    return (
        <ContentCard>
        <span className={classes.error}>
        <h2 className={classes.errorText}>
          Oops!<br />
          This link only exists in an alternate reality 😅
        </h2>
      </span>
        </ContentCard>
    )
}

export default NotFound;