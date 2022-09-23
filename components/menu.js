import React, { useState } from "react";
import {
  EditOutlined,
  CompassOutlined,
  ReadOutlined
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { useRouter } from "next/router";
import { get } from "lodash";

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
    getItem("My Feed", "/my-feed", <ReadOutlined />    ),
    getItem("Drafts" , "/draft", <EditOutlined />),
  ];

const SideMenu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(get(router,'route'));

  return (
    <Sider width='23%'>
      <Content  style={{margin: '20px', background: 'f0f2f5'}}>
      <Menu
          style={{borderRadius: '10px' }}
        defaultSelectedKeys={[menu]}
        mode="inline"
        theme="light"
        items={items}
        selectedKeys={[menu]}
        onClick={(e)=>{
          console.log('on change')
          console.log('on change menu',e)
          setMenu(e.key)
          router.push(`/${get(e,'key')}`);
        }}
      />
      </Content>
    </Sider>
  );
};

export default SideMenu;
