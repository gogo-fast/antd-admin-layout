import {Component} from 'react'
import {connect} from 'dva';
import {Layout} from 'antd';
import MySider from "./Sider";
import MyHeader from "./Header";
import MainContent from "./Content";
import MyFooter from "./Footer";
import {ConfigDrawer} from "./ConfigDrawer";
import loadetheme from "../../utils/themeLoder";

import styles from './index.less'


@connect(
    ({layout}) => ({
        currentTheme: layout.theme
    })
)
class BasicLayout extends Component {

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
            <Layout className={styles['main-layout']}>
                <MySider/>
                <Layout>
                    {/*<ConfigDrawer/>*/}
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


export default BasicLayout;
