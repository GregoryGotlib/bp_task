import React, { useState, useEffect } from "react";
import * as Style from "./style";
import Popover from "@material-ui/core/Popover";

function Comment(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatarPopup, setAvatarPopup] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAvatarPopup(props.avatarClick(event.currentTarget.id));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Style.CommentContainer>
      <Style.AvatarWrapper>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Style.TypographyContainer>
            <b>User:</b>
            <small> {avatarPopup?.email}</small>
          </Style.TypographyContainer>
          <Style.TypographyContainer>
            <b>Latest Comment:</b>
            <small> {avatarPopup?.latestComment}</small>
          </Style.TypographyContainer>
        </Popover>
        <Style.AvatarImage
          src={props.avatar}
          onClick={handleClick}
          id={props.commentData.email}
        ></Style.AvatarImage>
      </Style.AvatarWrapper>
      <Style.TextWrapper>
        <Style.EmailWrapper>{props.commentData.email}</Style.EmailWrapper>
        <Style.CommentWrapper>{props.commentData.comment}</Style.CommentWrapper>
      </Style.TextWrapper>
    </Style.CommentContainer>
  );
}

export default Comment;
