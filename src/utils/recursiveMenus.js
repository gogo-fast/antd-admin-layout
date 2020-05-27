import {Menu,Icon} from 'antd';
import Link from 'umi/link';

const {SubMenu} = Menu;


function recursiveMenus(menus) {
    return menus.map(
        value => {
            let {title, key, icon, url, menus} = value;
            let k = `${key}`;
            let i = `${icon}`;
            let t = `${title}`;
            let u = `${url}`;
            if (menus && (menus.length !== 0)) {
                return (
                    <SubMenu
                        key={k}
                        title={
                            <span>
                          <Icon type={i}/>
                          <span>{t}</span>
                    </span>
                        }
                    >
                        {recursiveMenus(menus)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={k}>
                        <Link to={u}>
                            <Icon type={i}/>
                            <span>{t}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        }
    )
}

export default recursiveMenus;



