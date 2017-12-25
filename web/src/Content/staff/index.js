/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table} from 'antd'
import React, {Component} from 'react'

export  default class StaffViewController extends Component
{
    render()
    {
        return ( <Table dataSource={dataSource} columns={columns} />)
    }
}

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    phone:1233213213,
    status:1,
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    phone:1233213213,
    status:1,
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
}
];

<Table dataSource={dataSource} columns={columns} />

