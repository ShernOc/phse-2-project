import React,{useState} from "react";

// Displays blog post content 

const BlogContent = ({title, content})=>{
  return (
    <div className="blog">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>  );
};

export default BlogContent; 