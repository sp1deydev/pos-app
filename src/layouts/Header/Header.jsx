import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

// const items = [
//   { key: "1", label: "Home" },
//   { key: "2", label: "About" },
//   { key: "3", label: "Contact" },
// ];

const settingMenu = (
  <Menu>
    <Menu.Item key="logout" icon={<LogoutOutlined />}>
      General
    </Menu.Item>
  </Menu>
);

const AppHeader = () => {
  return (
    <Header className="header-container">
      <div className="header-app-text">Vtiger CRM</div>
      {/* <Menu theme="dark" mode="horizontal" items={items} style={{ flex: 1, justifyContent: "center" }} /> */}
      <Dropdown overlay={settingMenu} placement="bottomRight">
        <Avatar className="dark-bg pointer-cursor" icon={<SettingOutlined />} />
      </Dropdown>
    </Header>
  );
};

export default AppHeader;