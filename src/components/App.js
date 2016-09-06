require('normalize.css/normalize.css');
//require('styles/App.css');
import 'antd/dist/antd.css';
import React from 'react';
import DatePicker from 'antd/lib/date-picker'


import Transaction from '../components/Transaction'
import Navigation from '../components/Navigation'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {


  render() {
    return (
      <div className="index">
        <Navigation/>

        <Transaction/>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <DatePicker />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;