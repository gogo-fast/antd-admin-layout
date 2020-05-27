import {Component} from 'react';
import {Menu} from 'antd';
import {connect} from 'dva';
import withMyScrollBarWrap from "../../../../../../commons/MyScrollBar";
import recursiveMenus from "../../../../../../utils/recursiveMenus";
import menuList from "../../../../../../../config/menuConfig";


import styles from "./index.less";


@connect(
    ({layout}) => ({
        currentTheme: layout.theme
    })
)
class SiderMenu extends Component {
    state = {
        siderMenu: null
    };

    componentDidMount() {
        this.setState({
            siderMenu: recursiveMenus(menuList)
        })
    }

    render() {
        return (
            <Menu
                theme={this.props.currentTheme.themeType}
                mode="inline"
                className={styles['sider-menu']}
            >
                {this.state.siderMenu}
            </Menu>
        )
    }
}


export default withMyScrollBarWrap(SiderMenu);
