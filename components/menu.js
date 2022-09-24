import React, { useState, useEffect } from "react";
import {
  EditOutlined,
  CompassOutlined,
  ReadOutlined,
  RiseOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  RedditOutlined
} from "@ant-design/icons";
import { Menu, Layout, Divider, Card, Tag } from "antd";
import { useRouter } from "next/router";
import { get } from "lodash";
import { getData } from "../shared/api/url-helper";

const { Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Explore", "/explore", <CompassOutlined />),
  getItem("My Feed", "/my-feed", <ReadOutlined />),
  getItem("Drafts", "/draft", <EditOutlined />),
];

const SideMenu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(get(router, "route"));
  const [tagData, setTagData] = useState([]);

  useEffect(() => {
    getData("tag/get-all-tags")
      .then((res) => {
        console.log(res);
        const tagData = get(res, "data.data", []);
        setTagData(tagData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const gridStyle = {
    width: "100%",
    textAlign: "center",
  };
  return (
    <Sider width="23%">
      <Content
        style={{
          margin: "0 20px",
          background: "white",
          minHeight: "300px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Menu
          style={{}}
          defaultSelectedKeys={[menu]}
          mode="inline"
          theme="light"
          items={items}
          selectedKeys={[menu]}
          onClick={(e) => {
            console.log("on change");
            console.log("on change menu", e);
            setMenu(e.key);
            router.push(`/${get(e, "key")}`);
          }}
        />
        <Divider style={{ margin: "10px", minWidth: "95%" }} />
        <h1 style={{textAlign:'center'}}>
          {" "}
          Trending Tag <RiseOutlined />
        </h1>
        <Card style={{margin: '20px'}}>
          {tagData.map((item) => {
            return (
              <Card.Grid style={gridStyle}>{get(item, "tag_name")}</Card.Grid>
            );
          })}
        </Card>

        <Tag><FacebookOutlined /></Tag><LinkedinOutlined /><InstagramOutlined /><RedditOutlined />
      </Content>
    </Sider>
  );
};

export default SideMenu;
