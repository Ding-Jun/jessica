import React from 'react';
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		// Operations usually carried out in componentWillMount go here
		this.state = {
			current: 'mail'

		}
	}
	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key
		});
	}

	render() {
		return (
			<Menu onClick={this.handleClick} 
        		selectedKeys={[this.state.current]}
          		mode="horizontal" 
          >
          <Menu.Item key="logo">
            <Icon type="aliwangwang" />FUNTEST数据分析
          </Menu.Item>
          
          <Menu.Item key="index">
            <Icon type="home" />首页
          </Menu.Item>
          <Menu.Item key="upload">
            <Icon type="upload" />上传
          </Menu.Item>
          <Menu.Item key="report">
            <Icon type="bar-chart" />报告
          </Menu.Item>
          <Menu.Item key="config">
            <Icon type="setting" />配置
          </Menu.Item>
        </Menu>
		)
	}

}