import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { get } from "lodash";
import { Card, Avatar, Divider } from 'antd';
import { getDataByID } from '../../shared/api/url-helper';
import dynamic from "next/dynamic";
import ReplayCommentComponent from "../../components/ReplayCommentComponent";
import CommentComponent from "../../components/CommentComponent";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Question = (props) => {
    const { Meta } = Card;
    const router = useRouter();
  const { pd } = router.query;
  const [postData, setPostData] = useState({});
  const [style, setStyle] = useState({});
  const [value, setValue] = useState("");
    useEffect(() => {
        getDataByID('post/get', get(pd, '[0]', '')).then((res) => {
            console.log('res', res);
            const post = get(res, 'data.data', {});
            setPostData(post);
        }).catch((error) => {
            console.log(error);
        }) 
    }, []);

    const renderReactQuill = (data) => {
        return (
            <ReactQuill
              readOnly
              theme="snow"
              value={data}
              modules={{ toolbar: false }}
            />
        )
    }

    
    return (
        <>
             <Card 
              style={{ margin: "20px", overflow:'scroll', height:'75vh' }}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={get(postData, 'title')}
              ></Meta>
              <Card style={{border: 'none'}}>
              {renderReactQuill(get(postData, 'content', ''))}
              <Divider />
              <h2>Answers</h2>
              {get(postData, 'comments', []).map((item) => {
                return <CommentComponent data={item} />
            })}
            <Divider />
            <h2>Your Answer</h2>
            <ReplayCommentComponent postData={postData} />
             
            </Card>
            </Card>
        </>
    )
}

export default Question;