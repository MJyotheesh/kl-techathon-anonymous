import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CollapseComponent = ({ children }) => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel showArrow={false} header="Comment" key="2">
        {children}
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent;