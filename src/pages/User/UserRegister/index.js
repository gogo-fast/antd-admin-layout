import {Table, Divider, Tag} from 'antd';
import {connect} from 'dva';
import {useEffect, useState} from 'react';
import User from "../index";
import genMenuKey from "../../../utils/parseLocation";


const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical"/>
        <a>Delete</a>
      </span>
        ),
    },
];


const UserRegister = (props) => {

    // useEffect(
    //     () => {
    //         let pathnames = genMenuKey(props.location.pathname.split('/').slice(1));
    //         let OpenKeys = pathnames.slice(0, pathnames.length - 1);
    //         let SelectedKeys = pathnames.slice(pathnames.length - 1);
    //         props.dispatch({
    //             type: "layout/siderReOpen",
    //             payload: {
    //                 siderMenuOpenKeys: OpenKeys,
    //                 siderMenuSelectedKeys: SelectedKeys,
    //             }
    //         });
    //     },
    //     []
    // );
    return (
        <User>
            <p>this is user register page</p>
            <Table columns={columns} dataSource={data}/>
        </User>
    )
};


export default connect(
    ({layout}) => ({
        openKeys: layout.siderMenuOpenKeys,
        selectedKeys: layout.siderMenuSelectedKeys
    })
)
(UserRegister);

