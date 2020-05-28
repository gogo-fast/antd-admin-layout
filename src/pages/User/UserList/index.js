import {connect} from 'dva'
import {Component} from 'react';
import User from "../index";
import {Table, Divider, Tag, Button} from 'antd';
import Link from 'umi/link';
import {parseSearch, validPageSize, validPageNum} from "../../../utils/parseSearch";


const pageSizeOptions = ["5", "10", "20", "50"];

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
        if (page === 0)
            return originalElement;
        if (type === 'prev')
            return <Link className="ant-pagination-item-link" to={this.getUrl(page, this.state.pageSize)}>&lt;</Link>;
        if (type === 'next')
            return <Link className="ant-pagination-item-link" to={this.getUrl(page, this.state.pageSize)}>&gt;</Link>;
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
            columns.push(column)
        }
        if (columns.length !== 0) {
            columns.push({
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: () => <span>
                <Button type="primary">Add</Button>
                <Divider type="vertical"/>
                <Button>Edit</Button>
                <Divider type="vertical"/>
                <Button type="danger">Edit</Button>
            </span>
            });
        }

        this.props.users.map(
            (value) => {
                value.key = value.userId.toString();
            }
        );

        return (
            <User>
                <Table
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

