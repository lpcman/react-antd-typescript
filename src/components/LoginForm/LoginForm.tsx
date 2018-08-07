import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginForm.less';
import ErrorMessage from '../ErrorMessage';

const FormItem = Form.Item;

export interface ILoginForm {
  data: {
    username: string,
    password: string
  },
  currentlySending: boolean,
  error: string,
  btnText: string,
  changeForm: any,
  login: any,
  form: any
}

function LoginForm(props: ILoginForm) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values); //tslint:disable-line
        console.log('Received props: ', props); //tslint:disable-line
        props.changeForm(values);
        props.login(values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="LoginForm">
        {props.error ? <ErrorMessage error={props.error} /> : null}
        <FormItem>
        {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
          initialValue: true,
      })(
        <Checkbox>Remember me</Checkbox>
      )}
      <a className="login-form-forgot" href="">Forgot password</a>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
    </Button>
      Or <a href="">register now!</a>
    </FormItem>
    </Form>
  )
}

export default Form.create()(LoginForm as any);
