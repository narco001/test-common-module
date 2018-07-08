import React from 'react';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';

const Head = props => (
  <div className="ant-layout-breadcrumb">
    <Breadcrumb>
      <Breadcrumb.Item>公用组件</Breadcrumb.Item>
      <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

Head.propTypes = {
  name: PropTypes.string,
};

export default Head;
