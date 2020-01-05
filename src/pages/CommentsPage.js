import React from "react";

import Header from "../elements/Header";
import FakePost from "../elements/FakePost";
import Comments from "../elements/Comments";
import NewComment from "../elements/NewComment";
import UserInfo from "../elements/UserInfo";

const CommentsPage = () => (
  <>
    <Header />
    <div className="col-sm-12 col-md-8 col-lg-8 m-auto">
      <div className="container">
        <FakePost />
        <UserInfo />
        <NewComment />
        <Comments />
      </div>
    </div>
  </>
);

export default CommentsPage;
