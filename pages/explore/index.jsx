import {
} from "antd";
import React from "react";
import CommentComponent from "../../components/CommentComponent";
import PostComponent from "../../components/PostComponent";
import ReplayCommentComponent from "../../components/ReplayCommentComponent";

function Explore() {
  return (
    <>
      <PostComponent>
        <CommentComponent />
        <ReplayCommentComponent />
      </PostComponent>
    </>
  );
}
export default Explore;
