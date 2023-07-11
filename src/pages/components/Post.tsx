import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  editPost: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (

    <>

    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <div className="contitle">
        <h2 className="post__text__title">{post.title}</h2>
        <small>By {authorName}</small>
      </div>
      <ReactMarkdown className="post__text__description" children={post.content} />
    </div>

    </>

  );
};

export default Post;