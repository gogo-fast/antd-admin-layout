import {Icon, Menu, Dropdown, Avatar} from 'antd';
import {connect} from 'dva';


import ThemeSwitcher from "./components/ThemeSwither";


import styles from './rightContent.less';
import {LogoutIcon} from "./icons";


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.bing.com/">
                <Icon type="user"/> 个人中心
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.bing.com/">
                <Icon type="setting" theme="filled"/> 修改密码
            </a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
                <LogoutIcon type='iconLogout' style={{fontSize: 16}}/> 退出登录
            </a>
        </Menu.Item>
    </Menu>
);


const RightContent = (props) => {
    return (
        <div className={styles['header-right-items']}>

            <div className={styles['right-item']}>
                <ThemeSwitcher/>
            </div>

            <div className={styles['right-item']}>
                <Avatar style={{backgroundColor: "#ad8b00", verticalAlign: 'middle'}} size="large">
                    CMDB
                </Avatar>
            </div>
            <div className={styles['right-item']}>
                <Dropdown
                    overlay={menu}
                    placement="bottomRight"
                    className={styles['item-dropdown']}
                >
                    <div onClick={e => e.preventDefault()}>
                        YourName
                    </div>
                </Dropdown>
            </div>
        </div>
    )
};


export default RightContent;
