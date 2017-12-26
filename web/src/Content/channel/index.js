/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table} from 'antd'
import React, {Component} from 'react'
import {ChannelHandler} from '../../HttpRequest/ChannelHandler'
export  default class ChannelViewController extends Component
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
        ChannelHandler.getAllChannel((data)=>{
            this.setState({
                dataSource:data
            })
        },(faile)=>{

        })
    }
}

/**
 * Created by shenqiao on 2017/12/24.
 */
