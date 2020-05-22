import {Menu, Icon} from 'antd';
import Link from 'umi/link';

import styles from "./index.less";


const {SubMenu} = Menu;


const SiderMenu = (props) => (
    <Menu
        theme={'dark'}
        mode="inline"
        className={styles['sider-menu']}
    >
        <SubMenu
            key="dashboard"
            title={
                <span>
                  <Icon type="dashboard"/>
                  <span>仪表盘</span>
                </span>
            }
        >
            <Menu.Item key="project1">
                <Link to={'/dashboard/pj1'}>
                    <Icon type="project"/>
                    项目1展示
                </Link>
            </Menu.Item>
            <Menu.Item key="project2">
                <Link to={'/dashboard/pj2'}>
                    <Icon type="project"/>
                    项目2展示
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="user"
            title={
                <span>
                    <Icon type="team" />
                    <span>用户页</span>
                </span>
            }
        >
            <Menu.Item key="userList">
                <Link to={'/user/list'}>
                    <Icon type="unordered-list"/>
                    用户列表
                </Link>
            </Menu.Item>
            <SubMenu key="userRegister"
                title={
                    <span>
                        <Icon type="user"/>
                        <span>用户操作</span>
                    </span>
                }
            >
                <Menu.Item key="userlist">
                    <Link to={'/user/register'}>
                        <Icon type="user-add" />
                        用户注册
                    </Link>
                </Menu.Item>
            </SubMenu>
        </SubMenu>
    </Menu>
);


export default SiderMenu;
