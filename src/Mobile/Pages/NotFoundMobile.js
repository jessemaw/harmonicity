import React from "react";
import classes from "./NotFoundMobile.module.css";

function NotFoundMobile() {
    return (
    <div className={classes.container}>
      <h1 className={classes.header}>404</h1>
      <p className={classes.errorText}>
        Oops! <br />
        This link only exists in an alternate reality 😅
      </p>
    </div>
    )
}

export default NotFoundMobile;