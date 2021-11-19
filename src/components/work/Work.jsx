import React from 'react';
import './work.css';

const Work = ({ imgUrl, date, text, hostedLink }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p><a href={hostedLink}>See hosted site</a></p>
    </div>
  </div>
);

export default Work;