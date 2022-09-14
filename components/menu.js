import React, { useState, useEffect } from "react";
import { Col, Row, Layout } from "antd";
import _ from "lodash";

const { Content } = Layout;

const SideMenu = () => {

    return (
        <Layout>
            <Content>
                <Row>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                        <div>My Feed</div>
                    </Col>
                    <Col xs={0} sm={0} md={2} lg={3} xl={3} />
                </Row>
            </Content>
        </Layout>
    );
};

export default SideMenu;
