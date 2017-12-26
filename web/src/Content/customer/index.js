/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table,Button,Modal,Input,Select} from 'antd'
import React, {Component} from 'react'
import {CustomerHandler} from '../../HttpRequest/CustomerHandler'

export  default class CustomerViewController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            channel:null,
            staff:null,
            segment:null,
            visible:false,
            dataSource:props.customer,
            columns: [{
                title: '姓名',
                dataIndex: 'customerName',
                key: 'customerName',
            }, {
                title: '电话',
                dataIndex: 'customerTelephone',
                key: 'customerTelephone',
            }, {
                title: '渠道',
                dataIndex: 'channelName',
                key: 'channelName',
            }, {
                title: '时段',
                dataIndex: 'segment',
                key: 'segment',
            }
            ]
        }
    }
    model()
    {
        return (
            <div>
                <Modal
                    title="添加用户"
                    visible={this.state.visible}
                    onOk={()=>this.setState({visible:false})}
                    onCancel={()=>this.setState({visible:false})}
                >
                    <h5>客户姓名</h5>
                    <Input placeholder="客户姓名" />
                    <h5>客户电话</h5>
                    <Input placeholder="客户电话" />
                    <h5>渠道 ▽</h5>
                    <div>
                        <Select  style={{ width: 240 }} onChange={(v)=>{this.setState({channel:v})}}>
                            {
                                this.props.channel.map((v,i)=>{
                                    return (
                                        <Option key={i} value={v}>{v.channelName}</Option>
                                    )
                                })
                            }
                        </Select>
                    </div>
                    <h5>接待员工 ▽</h5>
                    <div>
                        <Select  style={{ width: 240 }} onChange={(v)=>{this.setState({staff:v})}}>
                            {
                                this.props.staff.map((v,i)=>{
                                    return (
                                        <Option key={i} value={v}>{v.staffName}</Option>
                                    )
                                })
                            }
                        </Select>
                    </div>
                    <h5>时段 ▽</h5>
                    <div>
                        <Select  style={{ width: 240 }} onChange={(v)=>{this.setState({segment:v})}}>
                            {
                                this.props.segment.map((v,i)=>{
                                    return (
                                        <Option key={i} value={v}>{v.segmentName}</Option>
                                    )
                                })
                            }
                        </Select>
                    </div>
                </Modal>
            </div>
        )
    }
    render() {
        return (
            <div style={{margin:10}}>
                <div style={{flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
                    <h3>意向客户列表</h3>
                    <Button type="primary" onClick={()=>this.setState({visible:true})}>添加</Button>
                </div>
                <Table dataSource={this.state.dataSource} columns={this.state.columns}/>
                {this.model()}
            </div>

        )
    }

    componentDidMount() {
        //this.loadData();
    }

    loadData() {
        CustomerHandler.getAllCustomer((data)=> {
            this.setState({
                dataSource: data
            })
        }, (faile)=> {

        })
    }
}