import React, { useState } from "react";
import * as Style from "./style";
import CommentForm from "./CommentForm";
import CommentsBoard from "./CommentsBoard";

function Dashboard() {
  return (
    <Style.Container>
      <CommentForm />
      <CommentsBoard />
    </Style.Container>
  );
}

export default Dashboard;
