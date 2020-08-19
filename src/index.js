import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Bhavik Vashi" createdAt="Today at 6:00 PM" comment="Good Work"/>
      <CommentDetail author="Yash Patel" createdAt="Today at 5:00 AM" comment="Nice Work"/>
      <CommentDetail author="Raj Patel" createdAt="Yesterday at 6:00 PM" comment="Great man"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
