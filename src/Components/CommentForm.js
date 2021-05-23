import React, { useState } from "react";
import * as Style from "./style";
import { makeStyles } from "@material-ui/core/styles";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../Redux/actions/comment";
import { addUser } from "../Redux/actions/user";

import Button from "@material-ui/core/Button";

function CommentForm() {
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [commentError, setCommentError] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const validateEmailValue = () => {
    if (!validator.isEmail(emailValue)) {
      setEmailError("Email is not valid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validateCommentValue = () => {
    if (validator.isEmpty(commentValue)) {
      setCommentError("Please write comment");
      return false;
    } else {
      setCommentError("");
      return true;
    }
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmailValue();
    const isCommentValid = validateCommentValue();
    if (isEmailValid && isCommentValid) {
      dispatch(addUser({ email: emailValue }));
      dispatch(addComment({ email: emailValue, comment: commentValue }));
      setEmailValue("");
      setCommentValue("");
    }
  };

  return (
    <Style.FormCard>
      <Style.FormCardHeader title="Comments Book" subheader="May 23, 2021" />
      <Style.FormCardContent>
        <Style.EmailFieldWrapper>
          <Style.CommentTextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            error={emailError ? true : false}
            rowsMax={8}
            value={emailValue}
            onChange={handleEmailChange}
            variant="outlined"
            helperText={emailError}
          />
        </Style.EmailFieldWrapper>
        <Style.CommentFieldWrapper>
          <Style.CommentTextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            error={commentError ? true : false}
            rows={4}
            value={commentValue}
            onChange={handleCommentChange}
            variant="outlined"
            helperText={commentError}
          />
        </Style.CommentFieldWrapper>
        <Style.SubmitButtonWrapper>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Style.SubmitButtonWrapper>
      </Style.FormCardContent>
    </Style.FormCard>
  );
}

export default CommentForm;
