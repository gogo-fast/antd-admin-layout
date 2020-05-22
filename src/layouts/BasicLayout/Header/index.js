import styles from './index.less';
import {connect} from 'dva';
import {Layout, Icon} from 'antd';


import RightContent from "../components/Header/rightContent";


const {Header} = Layout;


const MyHeader = (props) => {
    return (
        <Header className={styles['layout-header']}>
            <div className={styles['header-left']}>
                <div className={styles['sider-trigger']}>
                    <Icon
                        type={props.siderCollapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={() => props.dispatch({
                            type: 'layout/siderTrigger',
                            payload: {siderCollapsed: !props.siderCollapsed}
                        })}
                    />
                </div>
                <span className={styles['sider-drawer-trigger']}>
                    <Icon
                        type={props.siderDrawerVisible ? 'menu-fold' : 'menu-unfold'}
                        onClick={() => props.dispatch({
                            type: 'layout/siderDrawerTrigger',
                            payload: {siderDrawerVisible: !props.siderDrawerVisible}
                        })}
                    />
                </span>
            </div>
            <RightContent/>
        </Header>
    )
};


export default connect(
    state => ({
        siderCollapsed: state.layout.siderCollapsed,
        siderDrawerVisible: state.layout.siderDrawerVisible
    })
)(MyHeader);


