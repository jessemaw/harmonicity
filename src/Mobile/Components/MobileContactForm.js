import React, { useState, useEffect, useReducer, useRef } from "react";
import classes from "./MobileContactForm.module.css";
import emailjs from "emailjs-com";

function nameReducer(state, action) {
  if (action.type === "INPUT_NAME") {
    return { value: action.val, isValid: action.val.length > 0 };
  }

  if (action.type === "NAME_BLUR") {
    return { value: state.value, isValid: state.value.length > 0 };
  }
  return { value: "", isValid: false };
}

function emailReducer(state, action) {
  if (action.type === "INPUT_EMAIL") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
}

function textReducer(state, action) {
  if (action.type === "INPUT_TEXT") {
    return { value: action.val, isValid: action.val.length > 0 };
  }
  if (action.type === "TEXT_BLUR") {
    return { value: state.value, isValid: state.value.length > 0 };
  }
  return { value: "", isValid: false };
}

function MobileContactForm(props) {
  const form = useRef();
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [textState, dispatchText] = useReducer(textReducer, {
    value: "",
    isValid: null,
  });

  const [isSent, setIsSent] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: nameIsValid } = nameState;
  const { isValid: textIsValid } = textState;

  //   Change input field colors based on validation

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && nameIsValid && textIsValid);
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [nameIsValid, emailIsValid, textIsValid]);

  //   Update input fields

  function nameChangeHandler(event) {
    dispatchName({ type: "INPUT_NAME", val: event.target.value });
  }

  function emailChangeHandler(event) {
    dispatchEmail({ type: "INPUT_EMAIL", val: event.target.value });
  }

  function textChangeHandler(event) {
    dispatchText({ type: "INPUT_TEXT", val: event.target.value });
  }

  //   Validate input fields

  function validateNameHandler() {
    dispatchName({ type: "NAME_BLUR" });
  }

  function validateEmailHandler() {
    dispatchEmail({ type: "EMAIL_BLUR" });
  }

  function validateTextHandler() {
    dispatchText({ type: "TEXT_BLUR" });
  }

  //   send contact form through emailjs

  function sendEmail(event) {
    event.preventDefault();
    setIsSent(true);

    emailjs
      .sendForm(
        "service_ew3rmzr",
        "template_65rx65i",
        form.current,
        "user_PU0FLq1ds60ksg9MzNqcw"
      )
      .then(
        (response) => {
          console.log(response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    nameState.value = "";
    emailState.value = "";
    textState.value = "";
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={classes.box}>
      {!isSent && (
        <React.Fragment>
          <input
            type="text"
            name="fullName"
            className={`${classes.name} ${
              nameState.isValid === false ? classes.invalid : ""
            }`}
            value={nameState.value}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
            placeholder="Name"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            value={emailState.value}
            className={`${classes.email} ${
              emailState.isValid === false ? classes.invalid : ""
            }`}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            placeholder="Email"
            autoComplete="off"
          />
          <textarea
            cols="50"
            rows="13"
            defaultValue={textState.value}
            placeholder="Message"
            name="message"
            className={`${classes.message} ${
              textState.isValid === false ? classes.invalid : ""
            }`}
            onChange={textChangeHandler}
            onBlur={validateTextHandler}
            autoComplete="off"
          ></textarea>
          <button className={classes.signUp} disabled={!formIsValid}>
            SEND
          </button>
        </React.Fragment>
      )}
      {isSent && (
        <React.Fragment>
          <h2 className={classes.emailText}>Message Received!</h2>
        </React.Fragment>
      )}
    </form>
    //   </div>
    // </div>
  );
}

export default MobileContactForm;
