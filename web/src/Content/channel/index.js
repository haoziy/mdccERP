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
            dataSource:[
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    channelName: '西湖区湖底公园1号'
                }
            ],
            columns:[
                {
                    title: '渠道名称',
                    dataIndex: 'channelName',
                    key: 'name',
                },

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
