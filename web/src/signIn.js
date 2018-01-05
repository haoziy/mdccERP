import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null
    }
  }
  //用户判断 userCheck(event){   this.userName = event.target.value; }
  render() {
    return (
      <div style={{
        display: 'flex',
        flex: '1'
      }}>
        <form
          style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div>
            <FormItem>
              <Input
                prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                placeholder="Username"/>
            </FormItem>
          </div>
          <div>
            <FormItem>
              <Input
                prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                type="password"
                placeholder="Password"/>
            </FormItem>
          </div>
          <div>
            <FormItem>
              <Checkbox>Remember me</Checkbox>
            </FormItem>
          </div>
          <div style={{maxWidth:'300px',width:'193px'}}>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{width:'100%'}} >
                Log in
              </Button>
            </FormItem>
          </div>
        </form>
      </div>
    );
  }
}
