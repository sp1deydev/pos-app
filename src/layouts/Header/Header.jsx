import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { SettingOutlined, GlobalOutlined, SyncOutlined } from "@ant-design/icons";

const { Header } = Layout;

const settingMenu = (
  <Menu>
    <Menu.Item key="general" icon={<SettingOutlined />}>
      Chung
    </Menu.Item>
    <Menu.Item key="sync" icon={<SyncOutlined />}>
      Đồng bộ dữ liệu
    </Menu.Item>
    <Menu.Item key="language" icon={<GlobalOutlined />}>
      Ngôn ngữ
    </Menu.Item>
  </Menu>
);

const AppHeader = () => {
  return (
    <Header className="header-container">
      <div className="header-app-text">Vtiger CRM</div>
      <Dropdown overlay={settingMenu} placement="bottomRight">
        <Avatar className="primary-bg pointer-cursor" icon={<SettingOutlined />} />
      </Dropdown>
    </Header>
  );
};

export default AppHeader;