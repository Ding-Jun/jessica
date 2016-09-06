import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Card from 'antd/lib/card'
import Select from 'antd/lib/select'

const Option = Select.Option;

export default class Transaction extends React.Component {
	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>
	}
}