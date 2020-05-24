import {Component} from 'react';
import {Layout} from 'antd';
import withMyScrollBarWrap from "../../../commons/MyScrollBar";

import styles from "./index.less";


const {Content} = Layout;


@withMyScrollBarWrap
export default class MainContent extends Component {
    render() {
        return (
            <Content className={styles['main-content']}>
                {this.props.children}
            </Content>
        )
    }
}
