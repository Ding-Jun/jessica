import React from 'react';
import Uploader from './Uploader'
import {
  Steps,
  Row,
  Col,
  Card,
  Icon

} from 'antd';
const Step = Steps.Step;
export default class UploadView extends React.Component {
  render() {
    return (
      <div style={{width:"70%",margin:"0 auto"}}>
        <Card title="上传" bordered={false} >
          <Row >
            <Col span={12} offset={6}>
      				<Steps style={{margin:"0 0px 50px"}} current={0} status="process">
      				  <Step title="选择数据"  />
      				  <Step title="处理"  />
      					<Step title="报告"  />
      				</Steps>
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={4}>
  				<Uploader/>
            </Col>
          </Row>
        </Card>
			</div>
    )
  }
}