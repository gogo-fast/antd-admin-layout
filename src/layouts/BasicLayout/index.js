import {Layout, Menu, Icon, Switch} from 'antd';
import {connect} from 'dva';

import MySider from "./Sider";
import MyHeader from "./Header";
import MainContent from "./Content";
import MyFooter from "./Footer";
import Siderdrawer from "./components/Sider/siderdrawer";
import styles from './index.less'


export default class BasicLayout extends React.Component {
    render() {
        return (
            // 将布局的元素都放在一个 Layout 组件中是保证左右高度一致的关键。
            <Layout className={styles['main-layout']}>
                <MySider/>
                <Layout>
                    <MyHeader/>
                    <MainContent>
                        {this.props.children}
                    </MainContent>
                    <MyFooter/>
                </Layout>
            </Layout>
        );
    }
}