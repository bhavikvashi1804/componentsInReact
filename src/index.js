import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Bhavik Vashi" createdAt="Today at 6:00 PM" comment="Good Work" img={faker.image.avatar()}/>
      <CommentDetail author="Yash Patel" createdAt="Today at 5:00 AM" comment="Nice Work" img={faker.image.avatar()}/>
      <CommentDetail author="Raj Patel" createdAt="Yesterday at 6:00 PM" comment="Great man" img={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
