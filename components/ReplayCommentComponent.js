import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import dynamic from "next/dynamic";
const { TextArea } = Input;
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { updateData } from '../shared/api/url-helper';

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const ReplayCommentComponent = (properties) => {
  const { postData } = properties;
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const [style, setStyle] = useState({});

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

  const Editor = () => (
    <>
      <ReactQuill
              theme="snow"
              toolbar
              placeholder="Edit your content here"
              value={value}
              modules={module}
              onChange={setValue}
              style={style}
            />
        <Button disabled={!value} onClick={handleSubmit}>
          Add Comment
        </Button>
    </>
  );

  const handleSubmit = () => {
    console.log('in')
    const { _id } = postData;
    setSubmitting(true);
    const params = {
      user_id: '632d8b3f1b4c32fd0dbea335',
      comment: value
    }
    updateData('post/update-post', _id, params).then((res) => {
      console.log('res', res);
    }).catch((err) => {
      console.log('err', err);
    })
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="" />}
        content={
          <Editor />
        }
      />
    </>
  );
};

export default ReplayCommentComponent;