import React from 'react';
import './BlogPost.scss';

const BlogPost = ({ image, title, caption }) => {
  return (
    <div className="blog-post">
      <figure className="image">
        <img src={image} alt="Post" />
      </figure>
      <h2>{title}</h2>
      <p>{caption}</p>
    </div>
  );
};

export default BlogPost;
