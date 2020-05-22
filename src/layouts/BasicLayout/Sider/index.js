import {connect} from 'dva';
import {Layout} from 'antd';
import SiderBar from '../components/Sider/siderbar';
import Siderdrawer from "../components/Sider/siderdrawer";
import styles from "./index.less";


const {Sider} = Layout;


const MySider = (props) => {
    console.log('@@@@', props.siderCollapsed);
    return (
        <Sider
            className={styles['layout-sider']}
            trigger={null}
            collapsible
            collapsed={props.siderCollapsed}
        >
            <SiderBar/>
            <Siderdrawer/>
        </Sider>
    )
};


export default connect(
    state => ({
        siderCollapsed: state.layout.siderCollapsed,  // 一定不要忘记指定名称空间"layout"
    })
)(MySider);



