import { Layout, Card, Form, Input, Select, Space, Button } from "antd";
import React, { useState, useEffect, notification } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { getData, postData } from "../../shared/api/url-helper";
import { get } from "lodash";

const { Content } = Layout;
const { Option } = Select;

const Drafting = (props) => {
  console.log("props", props);
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const [style, setStyle] = useState({margin: '20px'});
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

  const module = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ size:[]],
      // [{ font: [] }],
      ["blockquote", "code-block"],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ script: "sub" }, { script: "super" }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      ["link"],
      ["image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },
  };

  const handleClose = () => {
    history.push("/explore");
  };

  const onFinish = (values) => {
    console.log({ values, value });
    const { title, tags } = values;
    const params = {
      title,
      tags,
      content: value,
    };
    postData("post/create-post", params)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Content>
        <Card style={{ margin: "20px", borderRadius: '10px',  overflow: "scroll",
          overflowY: 'none',
           height:'75vh'  }}>
          <Form
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Tags"
              name="tags"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Select mode="multiple" placeholder="add tags" allowClear>
                {tagData.map((item) => (
                  <Option value={item.tag_name}>{item.tag_name}</Option>
                ))}
              </Select>
            </Form.Item>
            <ReactQuill
              theme="snow"
              toolbar
              placeholder="Edit your content here"
              value={value}
              modules={module}
              onChange={setValue}
              style={style}
            />
            <Form.Item
            wrapperCol={{ offset: 10, span: 16 }}
            >
              <Space>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button  onClick={handleClose} danger>
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </>
  );
};

export default Drafting;
