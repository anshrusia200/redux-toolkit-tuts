import React, { useState } from "react";
import { postAdd } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (title && content) {
      dispatch(postAdd(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const usersOptions = users.map((user) => (
    <option id={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(userId) && Boolean(title) && Boolean(content);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <br />
      <select name="" id="" onChange={(e) => setUserId(e.target.value)}>
        <option value=""></option>
        {usersOptions}
      </select>
      <br />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
      />
      <br />
      <button onClick={handleSubmit} disable={!canSave}>
        Add Post
      </button>
    </div>
  );
};
