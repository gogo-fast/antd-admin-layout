import {connect} from 'dva'
import {Component} from 'react';
import User from "../index";
import {Table, Divider, Tag, Button, Icon} from 'antd';
import Link from 'umi/link';
import {parseSearch, validPageSize, validPageNum} from "../../../utils/parseSearch";


const pageSizeOptions = ["5", "10", "20", "50"];
const EditableContext = React.createContext();


@connect(
    ({user, loading}) => ({
        users: user.users,
        total: user.total,
        loading: loading,
    })
)
class UserList extends Component {

    state = {
        current: 1,
        pageSize: 10
    };

    actionFunc = (pageNum, pageSise) => {
        this.props.dispatch(
            {
                type: "user/loadUsers",
                payload: {
                    pageNum: pageNum,
                    pageSise: pageSise
                }
            }
        )
    };

    componentWillMount() {
        let {page, size} = parseSearch(this.props.location.search);
        this.setState({
            current: validPageNum(page),
            pageSize: validPageSize(size, pageSizeOptions)
        });
    }

    componentDidMount() {
        this.actionFunc(this.state.current, this.state.pageSize);
    };

    getUrl = (currentpage, size) => {
        return `/user/list?page=${currentpage}&size=${size}`
    };

    pageChange = (pageNum, pageSize) => {
        this.actionFunc(pageNum, pageSize);
    };

    onShowSizeChange = (current, pageSize) => {
        this.setState({
            current: current,
            pageSize: pageSize
        });
        this.actionFunc(current, pageSize);
    };

    // 使url和当前页数据一致
    itemRender = (page, type, originalElement) => {
        // console.log(page, type)
        // if (page === 0)
        //     return originalElement;
        if (type === 'prev')
            return <Link className="ant-pagination-item-link" to={this.getUrl(page, this.state.pageSize)}><Icon
                type="caret-left"/></Link>;
        if (type === 'next')
            return <Link className="ant-pagination-item-link" to={this.getUrl(page, this.state.pageSize)}><Icon
                type="caret-right"/></Link>;
        if (type === 'page')
            return <Link to={this.getUrl(page, this.state.pageSize)}>{page}</Link>;

    };

    titleFunc = () => <h1>这是用户列表</h1>;

    render() {
        let columns = [];
        let firstRecord = this.props.users[0];
        for (let k in firstRecord) {
            if (k === "key") continue;
            let column = {};
            column.align = 'center'
            column.title = k;
            column.dataIndex = k;
            column.key = k;
            if (k === 'userType') {
                column.render = userType => {
                    if (userType === 0) {
                        return (<Tag color={'green'}>Admin</Tag>);
                    } else if (userType === 1) {
                        return (<Tag color={'geekblue'}>User</Tag>);
                    }
                }
            }
            if (k === 'userId') {
                column.width = '70px'
            }
            columns.push(column)
        }

        if (columns.length !== 0) {
            columns.push({
                    align: 'center',
                    title: 'Action',
                    dataIndex: '',
                    key: 'x',
                    render: () => (
                        <span>
                            <Button style={{background: '#bae637', width: '32px', padding: 0, fontSize: '20px'}} onClick={this.userEdit}><Icon
                                type="form"/></Button>
                            <Divider type="vertical"/>
                            <Button style={{background: '#d4b106', width: '32px', padding: 0, fontSize: '20px'}}><Icon type="delete"/></Button>
                        </span>
                    )
                }
            );
        }
        
        this.props.users.map(
            (value) => {
                value.key = value.userId.toString();
            }
        );

        return (
            <User>
                <Table
                    size="small"
                    title={this.titleFunc}
                    columns={columns}
                    dataSource={this.props.users}
                    loading={this.props.loading.models.user}
                    pagination={{
                        total: this.props.total,
                        pageSize: this.state.pageSize,
                        defaultCurrent: this.state.current,
                        pageSizeOptions: pageSizeOptions,
                        showSizeChanger: true,
                        onShowSizeChange: this.onShowSizeChange,
                        onChange: this.pageChange,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`,
                        itemRender: this.itemRender
                    }}
                    bordered
                >
                </Table>
            </User>
        )
    }
}


export default UserList;

