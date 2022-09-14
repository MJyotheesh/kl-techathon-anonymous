import React from "react";
import { Layout, Row, Col } from "antd";
//import Container from "./container";

const HeaderDetails = () => {
    return (
        <div>
            <Layout style={{ backgroundColor: 'white', height: 80 }}>
                <Row gutter={16} justify="center" align="middle">
                    <Col span={24}>
                        <header>
                            <div style={{ color: 'blue' }}>
                                Anonymous
                            </div>
                        </header>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default HeaderDetails;
