//require('normalize.css/normalize.css');
//require('styles/App.css');
//import 'antd/dist/antd.css';
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from '../components/Navigation'
class AppComponent extends React.Component {


	render() {
		return (
			<div className="index" >
        <Navigation/>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
        {this.props.children}
        </div>
      </div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;