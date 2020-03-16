import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import logo from './logo.svg';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import '../src/assets/css/App.css';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const cardData = [
  {
    nama : "Muklas",
    job : "Mahasiswa"
  },
  {
    nama : "Siapa",
  },
  {
    nama : "Testing",
  }
]

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render(){
    return (
      <div className="App">
        
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
            <MailOutlined />
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <AppstoreOutlined />
            Navigation Two
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <SettingOutlined />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
       
        {
          cardData.map( data =>
            <Card title="Default size card" className="card" extra={<a href="#">More</a>} >
              <p>{data.nama}</p>
            </Card>
          )
        }

        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>


      </div>
    );
  }
  
}

export default App;
