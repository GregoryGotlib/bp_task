import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { getComments, getUsers } from "../Services/Api";

function CommentsBoard() {
  const [filteredComments, setFilteredComments] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [filterError, setFilterError] = useState("");
  const [comments, setComments] = useState(null);
  const [users, setUsers] = useState(null);
  const app = useSelector((state) => state.app);

  useEffect(() => {
    getBoardData();
  }, [app.comments]);

  const getBoardData = async () => {
    let comments = await getComments();
    let users = await getUsers();
    setComments(comments);
    setUsers(users);
  };

  const renderComments = () => {
    if (users?.length && comments?.length) {
      return comments.map((obj) => {
        const user = users.find((user) => user.email == obj.email);
        return (
          <Comment
            avatarClick={getLastComment}
            commentData={obj}
            avatar={user?.avatar}
            latestComment={user?.latestComment}
          ></Comment>
        );
      });
    }
  };

  const getLastComment = (email) => {
    return users.find((user) => user.email == email);
  };

  const renderFilteredComments = () => {
    if (users?.length && filteredComments?.length) {
      return (
        users.length &&
        filteredComments?.map((obj) => {
          const user = users.find((user) => user.email == obj.email);
          return (
            <Comment
              avatarClick={getLastComment}
              commentData={obj}
              avatar={user?.avatar}
              latestComment={user?.latestComment}
            ></Comment>
          );
        })
      );
    }
  };

  const handleFilter = (e) => {
    const filteredValue = e.target.value;
    setFilterValue(filteredValue);
    if (!comments.length) {
      setFilterError("There are no comments to filter");
    } else {
      setFilteredComments(
        comments?.filter((item) => item.comment.includes(filteredValue))
      );
    }
  };

  return (
    <Style.CommentsCard>
      <Style.ComponentsCardContent>
        <Style.FilterWrapper>
          <Style.Filter
            id="input-with-icon-textfield"
            label="Filter Comments"
            value={filterValue}
            onChange={handleFilter}
            error={filterValue && filterError ? true : false}
            helperText={filterError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Style.FilterWrapper>
        {!filterValue && (
          <Style.CommentsWrapper>{renderComments()}</Style.CommentsWrapper>
        )}
        {filterValue && (
          <Style.CommentsWrapper>
            {renderFilteredComments()}
          </Style.CommentsWrapper>
        )}
      </Style.ComponentsCardContent>
    </Style.CommentsCard>
  );
}

export default CommentsBoard;
