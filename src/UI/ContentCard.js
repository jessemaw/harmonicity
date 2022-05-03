import React from "react";
import classes from "./ContentCard.module.css";

function ContentCard(props) {
    return <div className={`${classes.container} ${props.className}`}>{props.children}</div>
}

export default ContentCard;