import {connect} from 'dva';
import styles from "./index.less";


const Logo = (props) => (

    // following code is used by 'index-without-flex'
    // <div className={styles.logo}>
    //     <img className={styles['logo-img']} alt="logo"
    //          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    //     {props.siderCollapsed ? null : <h1 className={styles['logo-banner-txt']}>S - CMDB</h1>}
    // </div>


    <div className={styles['logo-container']}>
        <div className={styles['logo-item']}>
                <img className={styles['logo-img']} alt="logo"
                     src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
        </div>
        <div className={styles['logo-item']}>
                {props.siderCollapsed ? null : <span className={styles['logo-banner']}>GG - CMDB</span>}
        </div>
    </div>

);


export default connect(
    state => ({
        siderCollapsed: state.layout.siderCollapsed
    })
)(Logo);

