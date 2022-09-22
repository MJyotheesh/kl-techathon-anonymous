import { Layout, Card } from "antd";
import React from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);


const { Content } = Layout;

function Drafting() {
  return (
    <>
      <Content>
        <Card>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        </Card>
      </Content>
    </>
  );
}

export default Drafting;
