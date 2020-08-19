import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h1>Warning</h1>
        <div>Are you sure?</div>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Bhavik Vashi"
          createdAt="Today at 6:00 PM"
          comment="Good Work"
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Yash Patel"
          createdAt="Today at 5:00 AM"
          comment="Nice Work"
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Raj Patel"
          createdAt="Yesterday at 6:00 PM"
          comment="Great man"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
