import React from 'react';
import _ from 'lodash'
import {
  Input,
  Form,
  Button,
  Icon,
  Upload,
  Checkbox,
  Select,
  Tooltip
} from 'antd'

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;
var options = ['JW1121', 'JW7715', 'JW7705'].map((domain) => {

  return <Option key={domain}>{domain}</Option>;
});

class Uploader extends React.Component {
  reportExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'JasonWood') {
          callback([new Error('抱歉，该名称已存在。')]);
        } else {
          callback();
        }
      }, 800);
    }
  }
  handleUploa() {
    console.log('heiehei')
  }
  handleChange() {
    this.doValidateFile();

  }
  handleSubmit() {

  }
  handleReset() {

  }
  doValidateFile(rule, value, callback) {
    //console.log('changed')
    if (!value) {
      callback();
    } else {
      console.log("file", this.refs.dataFile.refs.input.files)
      var fileList = this.refs.dataFile.refs.input.files;
      _.map(fileList, (file) => {
        var suffix = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length); //获取后缀的
        console.log(suffix)

      })
    }

  }
  render() {
    const {
      getFieldProps,
      getFieldError,
      isFieldValidating
    } = this.props.form;
    const nameProps = getFieldProps('name', {
      //ref: "fileaa",
      rules: [{
        required: true,
        min: 5,
        message: '报告名称至少为 5 个字符'
      }, {
        validator: this.reportExists
      }]
    });
    const fileProps = getFieldProps('file', {
      //ref: "fileaa",
      rules: [{
        required: true,
        min: 1,
        message: '报告wenjian 至少为 5 个字符'
      }, {
        validator: this.doValidateFile.bind(this)
      }]
    });
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 6
      }
    };
    return (
      <Form horizontal>
        <FormItem ref="fileItem" label="数据文件" required {...formItemLayout} help={isFieldValidating('file') ? '校验中...' : (getFieldError('file') || []).join(', ')}>
          <Input {...fileProps} type="file" ref="dataFile" multiple="multiple" /><Button type="ghost" size="default" ><Icon type="file" />选择</Button>
        </FormItem>
    <FormItem label="报告名称" required {...formItemLayout} help={isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')} >
          <Input {...nameProps}  placeholder="数据处理后产生的报告名称"  />
        </FormItem>
          <FormItem label="芯片名称"  {...formItemLayout} help="暂时没用">
          <Select combobox
            
            
            filterOption={false}
            placeholder="213123"
          >
            {options}
          </Select>
        </FormItem>
        <FormItem label={<span>其他 <Tooltip title="FT+RT混合提交时   删除FT不良品数据"><Icon type="question-circle-o" /></Tooltip></span>} {...formItemLayout}>
          <Checkbox >删除FT不良品数据</Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ span: 6 ,offset: 6}}>
          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>返回</Button>
        </FormItem>
      </Form>
    )
  }
}
Uploader = createForm()(Uploader);

export default Uploader;