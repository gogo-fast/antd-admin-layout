import {connect} from 'dva';
import {Layout} from 'antd';
import SiderBar from '../components/Sider/siderbar';
import Siderdrawer from "../components/Sider/siderdrawer";
import loadetheme from "../../../utils/themeLoder";

import styles from "./index.less";


const {Sider} = Layout;


class MySider extends React.Component {

    componentWillMount() {
        var currentThemeData = {};
        currentThemeData = loadetheme();
        this.props.dispatch({
            type: "layout/switchTheme",
            payload: {theme: currentThemeData}
        })
    }

    render() {
        return (
            <Sider
                className={styles['layout-sider']}
                trigger={null}
                collapsible
                collapsed={this.props.siderCollapsed}
                theme={this.props.currentTheme.themeType}
            >
                <SiderBar/>
                <Siderdrawer/>
            </Sider>
        )
    }
}


export default connect(
    state => ({
        siderCollapsed: state.layout.siderCollapsed,  // 一定不要忘记指定名称空间"layout"
        currentTheme: state.layout.theme
    })
)(MySider);



