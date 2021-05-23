import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { getComments } from "../Redux/actions/comment";
import { getUsers } from "../Redux/actions/user";

function CommentsBoard() {
  const [filteredComments, setFilteredComments] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [filterError, setFilterError] = useState("");
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    getBoardData();
  }, []);

  const getBoardData = () => {
    dispatch(getComments());
    dispatch(getUsers());
  };

  const renderComments = () => {
    if (app.users?.length && app.comments?.length) {
      return app.comments.map((obj) => {
        const user = app.users.find((user) => user.email == obj.email);
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
    return app.users.find((user) => user.email == email);
  };

  const renderFilteredComments = () => {
    if (app.users?.length && filteredComments?.length) {
      return (
        app.users.length &&
        filteredComments?.map((obj) => {
          const user = app.users.find((user) => user.email == obj.email);
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
    if (!app.comments.length) {
      setFilterError("There are no comments to filter");
    } else {
      setFilteredComments(
        app.comments?.filter((item) => item.comment.includes(filteredValue))
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
