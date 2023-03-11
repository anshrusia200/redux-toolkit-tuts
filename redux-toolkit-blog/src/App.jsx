import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { PostsLists } from "./features/posts/PostsLists";
import { PostForm } from "./features/posts/PostForm";
function App() {
  return (
    <main className="App">
      <PostForm />
      <PostsLists />
    </main>
  );
}

export default App;
