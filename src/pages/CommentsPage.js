import React from "react";

import Header from "../elements/Header";
import FakePost from "../elements/FakePost";
import Comments from "../elements/Comments";
import NewComment from "../elements/NewComment";
import UserInfo from "../elements/UserInfo";

const CommentsPage = () => (
  <>
    <Header />
    <div style={{ margin: "0 auto", width: 740 }}>
      <div className="container">
        <FakePost />
        <NewComment />
        <Comments />
        <UserInfo />
      </div>
    </div>
  </>
);

export default CommentsPage;
