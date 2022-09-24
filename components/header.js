import React from "react";
import { Layout, Row, Col, Button } from "antd";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { isEmpty, get } from "lodash";
import { useRouter } from "next/router";

const { Sider, Content } = Layout;

const HeaderDetails = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        router.push("/login");
    }

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
