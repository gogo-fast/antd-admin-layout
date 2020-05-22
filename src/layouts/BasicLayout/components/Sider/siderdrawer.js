import {connect} from 'dva';
import {Drawer} from 'antd';
import Logo from "./components/Logo";
import SiderMenu from "./components/SiderMenu";


import styles from './siderdrawer.less'


const Siderdrawer = (props) => {
    return (
        <Drawer
            // title={<Logo/>}  // 在这里设置，下面会有一条白色的线
            placement='left'
            closable={false}
            onClose={props.onClose}
            visible={props.siderDrawerVisible}
            width={200}
            className={styles['sider-drawer']}
        >
            <Logo/>
            <SiderMenu/>
        </Drawer>
    );
};


export default connect(
    state => ({siderDrawerVisible: state.layout.siderDrawerVisible}),
    {
        "onClose": () => ({type: "layout/siderDrawerTrigger", payload: {siderDrawerVisible: false}})
    }
)(Siderdrawer);
