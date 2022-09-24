import React, { useState } from "react";
import { Layout, Row, Col, Button } from "antd";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "../public/logo.png";
const { Sider, Content } = Layout;

const HeaderDetails = () => {
  const [authenticate, setAuthenticate] = useState(true);
  return (
    <Layout.Header
      style={{
        backgroundColor: "#1890ff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Content>
        <Row align="middle">
          <Col span={4}>
            {" "}
            <Image
              src={Logo}
              width="100%"
                height={100}
            />
          </Col>

          <Col span={18}></Col>
          <Col span={2}>
            {authenticate ? (
              <Button style={{ color: "green" }}>
                Login <LoginOutlined />
              </Button>
            ) : (
              <Button style={{ color: "red" }}>
                Logout <LoginOutlined />
              </Button>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Content>
    </Layout.Header>
  );
};

export default HeaderDetails;
