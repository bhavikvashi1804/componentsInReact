import React from "react";


const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.createdAt}</span>
        </div>
        <div className="text">
          <span className="date">{props.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
