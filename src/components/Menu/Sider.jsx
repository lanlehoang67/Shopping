import { Menu, Icon } from 'antd';
import React,{Component  } from 'react'
const SubMenu = Menu.SubMenu;

class Sider extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Linh kiện máy tính</span>
            </span>
          }
        >
          <Menu.Item key="1">CPU</Menu.Item>
          <Menu.Item key="2">Mainboard</Menu.Item>
          <Menu.Item key="3">Ram</Menu.Item>
          <Menu.Item key="4">VGA</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Laptop</span>
            </span>
          }
        >
          <Menu.Item key="5">DELL</Menu.Item>
          <Menu.Item key="6">MSI</Menu.Item>
          {/* <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="setting" />
              <span>Desktop</span>
            </span>
          }
        >
          <Menu.Item key="9">Asus</Menu.Item>
          <Menu.Item key="10">Dell</Menu.Item>
      
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Điện thoại</span>
            </span>
          }
        >
         <Menu.Item key="11">Asus</Menu.Item>
          <Menu.Item key="12">Iphone</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;