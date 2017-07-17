require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import React, { Component } from 'react';
import NavBar from './NavBar';
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        惺惺惜惺惺想寻寻寻寻寻寻寻寻寻寻
      </div>
    );
  };
}

export default App;