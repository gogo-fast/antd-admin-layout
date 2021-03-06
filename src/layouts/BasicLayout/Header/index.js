import {connect} from 'dva';
import {Layout, Icon} from 'antd';
import RightContent from "../components/Header/rightContent";

import styles from './index.less';


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
            </div>
            <RightContent/>
        </Header>
    )
};


export default connect(
    ({ layout }) => ({
        siderCollapsed: layout.siderCollapsed,
        siderDrawerVisible: layout.siderDrawerVisible,

    })
)(MyHeader);


