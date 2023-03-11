import React from "react";
import { useDispatch } from "react-redux";
import { postReact } from "./postsSlice";

export const PostReactions = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="reactions-list">
        <li>
          <button
            onClick={() =>
              dispatch(postReact({ postId: post.id, reaction: "thumbsup" }))
            }
          >
            👍
          </button>
          {post.reactions.thumbsup}
        </li>

        <li>
          <button
            onClick={() =>
              dispatch(postReact({ postId: post.id, reaction: "wow" }))
            }
          >
            😲
          </button>
          {post.reactions.wow}
        </li>
        <li>
          <button
            onClick={() =>
              dispatch(postReact({ postId: post.id, reaction: "heart" }))
            }
          >
            💖
          </button>
          {post.reactions.heart}
        </li>
        <li>
          <button
            onClick={() =>
              dispatch(postReact({ postId: post.id, reaction: "rocket" }))
            }
          >
            🚀
          </button>
          {post.reactions.rocket}
        </li>
        <li>
          <button
            onClick={() =>
              dispatch(postReact({ postId: post.id, reaction: "coffee" }))
            }
          >
            ☕
          </button>
          {post.reactions.coffee}
        </li>
      </ul>
    </div>
  );
};
