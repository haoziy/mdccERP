/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table} from 'antd'
import React, {Component} from 'react'
import {CustomerHandler} from '../../HttpRequest/CustomerHandler'

export  default class CustomerViewController extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            dataSource:[],
            columns:[
                [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                }, {
                    title: '渠道',
                    dataIndex: 'channel',
                    key: 'channel',
                }
                ]
            ]
        }
    }

    render()
    {
        return ( <Table dataSource={this.state.dataSource} columns={this.state.columns} />)
    }
    componentDidMount()
    {
        this.loadData();
    }
    loadData()
    {
        CustomerHandler.getAllCustomer((data)=>{
            this.setState({
                dataSource:data
            })
        },(faile)=>{

        })
    }
}