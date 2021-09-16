
import React from "react";
import Antform from "./antform";
import { Layout, Menu} from 'antd';
import { BrowserRouter as Router, Switch, Route , Link } from "react-router-dom";
import Home from "./Anthome"
import AntAdditionaldetails from "./AntAdditionaldetails";
import UserList from "./AntList";

import {
  HomeOutlined,
  DesktopOutlined,
  
  TeamOutlined
  
} from '@ant-design/icons';
// import Home from "./home";
//  import { Link } from "react-router-dom";

const { Header, Content,Sider } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return ( <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home <Link style={{ textDecoration: "none" }} to="/"> </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
             SignUp <Link style={{ textDecoration: "none" }} to="/Signup"> </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
             Users <Link style={{ textDecoration: "none" }} to="/List"> </Link>
            </Menu.Item>
             </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
          <Switch>
          <Route exact path="/" component={Home}></Route>
           <Route exact path="/Signup" component={Antform}></Route>
           <Route
              exact
             path="/antAdditionaldetails"
            component={AntAdditionaldetails}
           ></Route>
           <Route exact path="/List" component={UserList}></Route>
          </Switch>
         </Content>
          </Layout>
      </Layout>
      </Router>
    );
  }
}

