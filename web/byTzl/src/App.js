import React, { Component } from 'react';
import {Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
//引入右边的表格
import BasicTable from './Table';
//引入左边的菜单
import Meau from './Meau';
//引入布局
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
       <Header style={{color:'#fff'}}>Welcome!This is Header</Header>
       <Layout>
         <Sider style={{color:'#fff'}}>
           <Meau />
         </Sider>
         <Content>
         <BasicTable  />
         </Content>
       </Layout>
       <Footer>Footer</Footer>
     </Layout>
      </div>
    );
  }
}

export default App;