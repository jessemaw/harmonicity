import React from "react";
import MobileContactForm from "../Components/MobileContactForm";
import classes from "./ContactMobile.module.css";

function ContactMobile() {
    return <div className={classes.container}>
        <h1 className={classes.header}>CONTACT</h1>
        <MobileContactForm />
    </div>
}

export default ContactMobile;