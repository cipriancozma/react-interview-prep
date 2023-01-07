import React from "react";
import HOC from "./HOC";

function Posts({ data }) {
  return (
    <div>
      {data.slice(0, 10).map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}

const PostsComp = HOC("Posts", Posts, "posts");
export default PostsComp;
