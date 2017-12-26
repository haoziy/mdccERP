/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table} from 'antd'
import React, {Component} from 'react'
import {StaffHandler} from '../../HttpRequest/StaffHandler'
export  default class StaffViewController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
            ],
            columns: [{
                title: '姓名',
                dataIndex: 'staffName',
                key: 'staffName',
            }, {
                title: '电话',
                dataIndex: 'staffTelephone',
                key: 'staffTelephone',
            }]
        }
    }

    render() {
        return ( <Table dataSource={this.state.dataSource} columns={this.state.columns}/>)
    }
    componentDidMount()
    {
        this.loadData();
    }

    loadData()
    {
        StaffHandler.getAllStaff((data)=>{
            this.setState({
                dataSource:data
            })
        },(faile)=>{

        })
    }
}

