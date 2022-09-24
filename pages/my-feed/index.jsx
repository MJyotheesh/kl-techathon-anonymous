import { Layout, Card, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import {  CommentOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import { getData } from "../../shared/api/url-helper";
import { get } from "lodash";
import { useRouter } from "next/router";
const { Meta } = Card;

const { Content } = Layout;

function MyFeed() {
  const [postArray, setPostArray] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getData("post/get-all-posts")
      .then((res) => {
        setPostArray(get(res, "data.data"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onCardClick = (value) => {
    console.log("value", value);
    const { _id } = value;
    router.push(`/question/${_id}`);
  };
  return (
    <>
      <Content
        style={{ overflow: "scroll", overflowY: "none", height: "75vh" }}
      >
        {postArray.map((item) => {
          return (
            <Card
              style={{ margin: "20px", borderRadius: '20px' }}
              actions={[<CommentOutlined onClick={() => onCardClick(item)} />]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={get(item, "title")}
              ></Meta>
              <Card style={{ border: "none" }}>
                <ReactQuill
                  readOnly
                  theme="snow"
                  value={get(item, "content", "")}
                  modules={{ toolbar: false }}
                />
              </Card>
            </Card>
          );
        })}
      </Content>
    </>
  );
}

export default MyFeed;
