import {Component} from 'react';
import {Menu} from 'antd';
import {connect} from 'dva';
import withRouter from 'umi/withRouter'
import withMyScrollBarWrap from "../../../../../../commons/MyScrollBar";
import recursiveMenus from "../../../../../../utils/recursiveMenus";
import genMenuKey from "../../../../../../utils/parseLocation";
import menuList from "../../../../../../../config/menuConfig";

import styles from "./index.less";

@connect(
    ({layout}) => ({
        currentTheme: layout.theme,
    })
)
@withRouter   // 由于SiderMenu组件并没有直接在config.js中配置,不会注入路由信息,这里需要通过withRouter注入location到props中。
class SiderMenu extends Component {
    state = {
        siderMenu: null,
        openKeys: [],
        selectedKeys: [],
    };

    UNSAFE_componentWillMount() {
        this.setState({
            siderMenu: recursiveMenus(menuList)
        });

        let pathnames = genMenuKey(this.props.location.pathname.split('/').slice(1));
        this.setState({
            openKeys: pathnames.slice(0, pathnames.length - 1),
            selectedKeys: pathnames.slice(pathnames.length - 1)
        })
    }

    // SubMenu 展开/关闭的回调 function(openKeys: string[])
    onOpenChange = openKeys => {
        if (openKeys && openKeys.length > 0) {
            this.setState({
                openKeys: openKeys.slice(openKeys.length - 1)
            })
        } else {
            this.setState({
                openKeys: []
            })
        }
    };
    // 点击 MenuItem 调用此函数 function({ item, key, keyPath, domEvent })
    onClick = ({item, key, keyPath, domEvent}) => {
        this.setState({
            selectedKeys: keyPath.slice(0, 1)
        });
        if (keyPath.length <= 1) {
            this.setState({
                openKeys: [],
            })
        }

    };

    render() {
        return (
            <Menu
                theme={this.props.currentTheme.themeType}
                mode="inline"
                className={styles['sider-menu']}
                onOpenChange={this.onOpenChange}
                onClick={this.onClick}
                defaultOpenKeys={this.state.openKeys}
                defaultSelectedKeys={this.state.selectedKeys}
            >
                {this.state.siderMenu}
            </Menu>
        )
    }
}


export default withMyScrollBarWrap(SiderMenu);
