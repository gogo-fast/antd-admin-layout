import {connect} from 'dva';
import {Drawer} from 'antd';
import Logo from "./components/Logo";
import SiderMenu from "./components/SiderMenu";


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
            drawerStyle={{background: props.currentTheme.themeColor}}
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
