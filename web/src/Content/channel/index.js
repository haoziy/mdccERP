/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table,Button} from 'antd'
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
        return ( 
            <div style={{margin:10}}>
                <div style={{flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
                    <h3>渠道名称</h3>
                    <Button type="primary" onClick={()=>this.setState({visible:true})}>添加</Button>
                </div>
                <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </div>
    )
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
