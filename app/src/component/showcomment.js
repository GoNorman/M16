import React from "react";
import Date from './date.js';

const ShowComment = (props) => {
  const { comment, deleteComment } = props;
  return (
    <div className="show">
      {comment.map((ev, index) => {
        return (
          <div key={index} className="showcommnet">
            <div className="name">
              <label>Name  :  </label>
            </div>
            <div className="user-name">
              <p>  {ev.name}</p>
            </div>
            <Date />
            <div className="comment-user">{ev.text}</div>
            <button
              className="btnDelete"
              type="button"
              onClick={e => deleteComment(index)}
              >
              Delete
            </button>
          </div>
          );
          })}
    </div>
  );
}

export default ShowComment;