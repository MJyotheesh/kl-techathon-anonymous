import React, { useState } from "react";
import { Layout, Row, Col, Button, Input } from "antd";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "../public/logo.png";
import { useRouter } from "next/router";

const { Sider, Content } = Layout;

const { Search } = Input;

const HeaderDetails = () => {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        router.push("/login");
    }

    return (
        <Layout.Header
            style={{
                backgroundColor: "white",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Content>
                <Row align="middle" style={{ border: "1px solid red" }}>
                    <Col span={4}>
                        {" "}
                        <Image src={Logo} width="100%" height={100} />
                    </Col>

                    <Col span={18}>
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            style={{
                                width: '400px',
                                marginLeft: '280px'
                            }}
                        />
                    </Col>
                    <Col span={2}>
                        <Button style={{ color: "red" }} onClick={handleLogout}>
                            Logout <LogoutOutlined />
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Content>
        </Layout.Header>
    );
};

export default HeaderDetails;
