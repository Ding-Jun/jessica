import React from 'react';
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'

const FormItem = Form.Item;
export default class Uploader extends React.Component {
	render(){
		return (
			<Form horizontal>
        <FormItem
          label="账户"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 3 }}
        >
          <Input placeholder="请输入账户名"
          />
        </FormItem>
  		</Form>
		)
	}
}