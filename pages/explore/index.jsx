import { Avatar, Row, Tooltip, notification, Card, List } from "antd";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getData } from "../../shared/api/url-helper";
import { CommentOutlined } from "@ant-design/icons";

const Explore = () => {
  const { Meta } = Card;
  const router = useRouter();
  const [allUser, setAllUser] = useState([]);
  const [postData, setPostData] = useState([]);
  const onCardClick = (value) => {
    console.log("value", value);
    const { _id } = value;
    router.push(`/question/${_id}`);
  };
  useEffect(() => {
    const promiseArr = [
      getData("user/get-all-user"),
      getData("post/get-all-posts"),
    ];
    Promise.all(promiseArr)
      .then((res) => {
        console.log("res", res);
        setAllUser(get(res, "[0].data.data", []));
        setPostData(get(res, "[1].data.data", []));
      })
      .catch((err) => {
        notification.open({
          message: err,
        });
      });
  }, []);

  return (
    <div style={{ width: "50%", margin: "20px" }}>
      {/* <Row>
        {
          allUser.map((item, index) => <Tooltip title={item.user_name} placement="top"><Avatar src={`https://joeschmoe.io/api/v1/${index}`} /></Tooltip>)
        }
      </Row> */}

      <Card style={{ borderRadius: "10px" }}>
        <Row>
          {allUser.map((item, index) => {
            return (
              <Tooltip title={get(item, "user_name")}>
                <Avatar
                  size={64}
                  src={`https://joeschmoe.io/api/v1/${index}`}
                />
              </Tooltip>
            );
          })}
        </Row>
      </Card>
      <div style={{ margin: "20px 0" }}>
        {postData.map((item, index) => {
          return (
            <Card
              actions={[<CommentOutlined onClick={() => onCardClick(item)} />]}
            >
              <Meta
                avatar={<Avatar src={`https://joeschmoe.io/api/v1/${index}`} />}
                title={get(item, "title")}
              />
            </Card>
          );
        })}
      </div>

      {/* <Row>
        {postData.map((item) => {
          return (
            <Card
              style={{ margin: "20px" }}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={get(item, 'title')}
              ></Meta>
            </Card>
          )
        })}
        </Row> */}
    </div>
  );
};
export default Explore;
