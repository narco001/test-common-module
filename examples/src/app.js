import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import Index from './pages/Index';
import Example from '../../src/components/Example';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <Route path="example" component={Example} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
