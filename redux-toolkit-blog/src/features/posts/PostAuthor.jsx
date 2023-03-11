import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

import React from "react";

export const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <div>by {author ? author.name : "Unknown Author"}</div>;
};
