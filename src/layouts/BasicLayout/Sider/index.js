import {connect} from 'dva';
import {Layout} from 'antd';
import SiderBar from '../components/Sider/siderbar';
import loadtheme from "../../../utils/themeLoder";

import styles from "./index.less";


const {Sider} = Layout;


class MySider extends React.Component {

    state = {
        w: window.innerWidth,
        siderCollapsed: this.props.siderCollapsed
    };

    componentWillMount() {
        var currentThemeData = {};
        currentThemeData = loadtheme();
        this.props.dispatch({
            type: "layout/switchTheme",
            payload: {theme: currentThemeData}
        })
    }

    componentDidMount() {
        // type must be "resize"
        window.addEventListener('resize', this.setCurrentWidth)
    }

    componentWillUnmount() {
        // type must be "resize"
        window.removeEventListener('resize', this.setCurrentWidth)
    }

    setCurrentWidth = () => {
        this.setState({
            w: window.innerWidth,
        });
        if (window.innerWidth < 1000) {
            this.props.dispatch({
                type: 'layout/siderTrigger',
                payload: {siderCollapsed: true}
            })
        } else {
            this.props.dispatch({
                type: 'layout/siderTrigger',
                payload: {siderCollapsed: false}
            })
        }
    };

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



