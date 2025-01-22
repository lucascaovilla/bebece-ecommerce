import React from 'react';
import './BlogPost.scss';

const BlogPost = ({ image, title, caption }) => {
  return (
    <div className="blog-post">
      <picture className="image">
        <img src={image} alt="Post" />
      </picture>
      <h2>{title}</h2>
      <p>{caption}</p>
      <a>Saiba mais!</a>
    </div>
  );
};

export default BlogPost;
