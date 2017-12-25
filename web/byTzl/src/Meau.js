import { Menu, Icon} from 'antd';
import React  from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


// const SubMenu = Menu.SubMenu;

class Meau extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div style={{ width:'100%' }}>
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="inbox" />
            <span>Option 4</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

// ReactDOM.render(<Meau />);

export default Meau;