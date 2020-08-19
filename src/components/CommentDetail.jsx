import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Bhavik Vashi
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00</span>
        </div>
        <div className="text">
          <span className="date">Great job</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
