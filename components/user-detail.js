import { Button, Form, Input, Row } from "antd";
import { isEmpty, get } from "lodash";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GoogleUsers from "./google-oauth";
import { postData } from "../shared/api/url-helper";

const UserDetail = (response) => {
    const [form] = Form.useForm();

    const onFinish = async (data) => {
        const { nickname, designation, phoneNumber } = data;
        const userName = `${get(response, 'userResponse.profileObj.givenName', "")}${" "}${get(response, 'userResponse.profileObj.familyName', "")}`;
        const userMail = get(response, 'userResponse.profileObj.email', "");
        const params = {
            nick_name: nickname,
            designation,
            phone_number: phoneNumber,
            user_name: userName,
            email: 'userMail2',
        }
        const createUser = await postData('user/create-user', params);
        localStorage.setItem("userInfo", get(createUser, 'data.data', {}));
    };

    return (
        <div className="sign-up-header">
            <div className="signup-container-top">
                <div className="enter-details">
                    Enter ur Details
                </div>
            </div>
            <Row className="sign-up-row">
                <Form
                    form={form}
                    className="sign-up-form"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="nickname"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter ur Nickname",
                            }
                        ]}
                    >
                        <Input placeholder="Nick name" />
                    </Form.Item>
                    <Form.Item
                        name="designation"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter ur Designation",
                            }
                        ]}
                    >
                        <Input placeholder="Designation" />
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                    >
                        <Input placeholder="Phone Number (Optional)" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className="rounded"
                            htmlType="submit"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </div>
    )
}
export default UserDetail