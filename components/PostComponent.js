import { MoreOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
import React from 'react';
const { Paragraph } = Typography;

const IconLink = ({ src, text, children}) => (
  <a className="example-link">
    {children}
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <div>
      <IconLink><LikeOutlined /></IconLink>
      <IconLink><DislikeOutlined /></IconLink>
      <IconLink><CommentOutlined /></IconLink>
    </div>
  </>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
    <div className="image">{extraContent}</div>
  </Row>
);

function PostComponent({children}){ return (
    <Card 
    style={{ borderRadius: '20px', }}
    >
  <PageHeader
    title="Title"
    className="site-page-header"
    subTitle="This is a subtitle"
    tags={<Tag color="blue">Running</Tag>}
    avatar={{
      src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
    }}
  >
    <Content
      extraContent={
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
          alt="content"
          width="100%"
        />
      }
    >
      {content}
    </Content>
    {children}

  </PageHeader>
  </Card>
)};

export default PostComponent;