/*TODO header显示组件 */
import React from 'react';
require('../css/header.css');
import {message,Menu, Dropdown, Icon } from 'antd';

const handleMenuItemClick =  (eventObj) =>{
    message.info('当前点击的是：  '+ eventObj.key);
};
const menu = (
    <Menu onClick={handleMenuItemClick}>
        <Menu.Item key="精华">
            <a rel="noopener noreferrer" href="#" >精华</a>
        </Menu.Item>
        <Menu.Item key="提问">
            <a rel="noopener noreferrer" href="#">提问</a>
        </Menu.Item>
        <Menu.Item key="招聘">
            <a rel="noopener noreferrer" href="#">招聘</a>
        </Menu.Item>
    </Menu>
);
const Header = ({detail}) => (
    <div className="header">
        <h2 className="title">CNnode 博客列表</h2>
        <div className="hoverClick">
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    分类 <Icon type="down" />
                </a>
            </Dropdown>
        </div>
    </div>
);
export default Header