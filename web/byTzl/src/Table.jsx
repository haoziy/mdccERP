import React  from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//首先先引入需要使用到的组件
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
//引入表格的css
import './table.css'

//定义一个小组件，名叫BasicTable
class EditableTable extends React.Component {
  //组件状态
  state = {
    //接收任意的输入值props
    value: this.props.value,
    //不可编辑状态
    editable: false,
  }
  //其中的方法一
  handleChange = (e) => {
    //将e.target指向事件执行时鼠标所点击区域的那个元素赋值给value-->常量，不可更改
    const value = e.target.value;
    //设置新的value值
    this.setState({ value });
  }
  //方法二
  check = () => {
    //首先设置不可编辑状态
    this.setState({ editable: false });
    //如果发生改变，则刷新改变的值
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  //方法三：编辑
  edit = () => {
    //设置可编辑状态
    this.setState({ editable: true });
  }
  //组合在一起
  render() {
    //将值和编辑状态赋给state
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {/* 给一个三目，判断该如何渲染 */}
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}


//这是另外一个组件
class BasicTable extends React.Component {
  //给它一些初始状态？？
  constructor(props) {
    super(props);
    //列
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      render: (text, record) => (
        <EditableTable
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
      title: 'age',
      dataIndex: 'age',
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="https://www.baidu.com">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      }],
      count: 2,
    };
  }
  //方法一
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  //方法二：删除？？
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  //方法三：增加？？
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  //组合在一起
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default BasicTable;