import {connect} from 'dva';
import {Drawer} from 'antd';
import SiderMenu from "./components/SiderMenu";

import Logo from "./components/Logo";


const Siderdrawer = (props) => {
    return (
        <Drawer
            // title={<Logo/>}  // 在这里设置，下面会有一条白色的线
            placement='left'
            closable={false}
            onClose={props.onClose}
            visible={props.siderDrawerVisible}
            width={200}
            bodyStyle={{padding: 0}}
            // drawerStyle={{background: "#001529"}}
            drawerStyle={{background: props.currentTheme.themeColor, overflow: "hidden"}}
            // className={styles['sider-drawer']}
        >
            <Logo/>
            <SiderMenu/>
        </Drawer>
    );
};


export default connect(
    state => ({
        siderDrawerVisible: state.layout.siderDrawerVisible,
        currentTheme: state.layout.theme
    }),
    {
        "onClose": () => ({type: "layout/siderDrawerTrigger", payload: {siderDrawerVisible: false}})
    }
)(Siderdrawer);
