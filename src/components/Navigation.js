import React from 'react';
import {Link} from 'react-router'

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
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
       <a className="navbar-brand" href="#">FUNTEST数据分析</a>
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><Link to="/"><span className="glyphicon glyphicon-user"></span></Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">首页</Link></li>
        <li><Link to="/upload">上传</Link></li>
        <li><Link to="/report">报告</Link></li>
        <li><Link to="/config">配置</Link></li>
      </ul>
      
    </div>
  </div>
</nav>
    )
  }

}