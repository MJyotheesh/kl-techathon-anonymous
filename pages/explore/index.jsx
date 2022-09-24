import {
  Avatar,
  Row,
  Tooltip,
  notification,
  Card
} from "antd";
import { get } from 'lodash';
import React, { useEffect, useState } from "react";
import { getData } from "../../shared/api/url-helper";

const Explore = () =>  {
  const { Meta } = Card;

  const [allUser, setAllUser] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const promiseArr = [getData('user/get-all-user'), getData('post/get-all-posts')];
    Promise.all(promiseArr).then((res) => {
      console.log('res', res);
      setAllUser(get(res, '[0].data.data', []))
      setPostData(get(res, '[1].data.data', []))
    }).catch((err) => {
      notification.open({
        message: err,
      });
    })
  }, []);

  return (
    <>
      <Row>
        {
          allUser.map((item, index) => <Tooltip title={item.user_name} placement="top"><Avatar src={`https://joeschmoe.io/api/v1/${index}`} /></Tooltip>)
        }
      </Row>
        <Row>
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
        </Row>
    </>
  );
}
export default Explore;
