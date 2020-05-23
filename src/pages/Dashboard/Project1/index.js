import Dashboard from "../index";
import DynamicAntdTheme from 'dynamic-antd-theme';
import {generateThemeColor, changeAntdTheme} from 'dynamic-antd-theme';
import {Button} from 'antd';

import styles from './index.less'


const Project = (props) => (
    <div className={styles.normal}>
        <Dashboard>
            <p>this is dashboard of project 1</p>
        </Dashboard>
    </div>

);


export default Project

