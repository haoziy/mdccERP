/**
 * Created by shenqiao on 2017/12/19.
 */
//const


const {_dev,_port}= require('./server.config.js')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json());
const {
    getAllChannel,
    addChannel
    } = require('./channel')


const db = require('./DBConfig')
const  API_MAP = {
    //用户相关
    addCustomer:'/customer/addCustomer',//添加用户
    editCustomer:'/customer/editCustomer',//编辑用户
    deleteCustomer:'/customer/deleteCustomer',//删除用户
    getAllCustomer:'/customer/getAllCustomer',//获取所有用户

    //渠道相关
    addChannel:'/channel/addChannel',//添加渠道
    deleteChannel:'/channel/deleteChannel',//删除渠道
    editChannel:'/channel/editChannel',//修改渠道
    getAllChannel:'/channel/getAllChannel',//获取所有渠道

    //员工相关
    addStaff:'/staff/addStaff',//添加员工
    deleteStaff:'/staff/delteStaff',//删除员工
    editStaff:'/staff/editStaff',//添加员工
    getAllStaff:'/staff/getAllStaff',//获取所有员工信息
}
const STATUS_CODE = {
    SUCCESS:0,//成功回调
    SERVER_ERROR:-1,//服务器错误

    CHANNEL_PARAM_ERROR:-1000,//渠道部分参数错误


    CUSTOMER_PARAM_ERROR:-2000,//客户部分参数错误

    STAFF_PARAM_ERROR:-3000,//员工部分参数错误

    SEGMENT_PARAM_ERROR:-4000,//分段部分参数错误


}

const HTTPMETHOD = {
    GET:'GET',
    POST:'POST',
}

const getCallBack = (req,res)=>{
    httCallBack(req,res);
}
const postCallBack = function(req,res){
    httCallBack(req,res);
}
const httCallBack = function(req,res){
    if(!_dev)//开发者模式下所有的get请求都接收
    {
        res.status(500).end()
        return;
    }
    switch (req.path)
    {
        case API_MAP.getAllCustomer:
            sqlExecute(getAllCustomer(),null,(result)=>{
                if(result)
                {
                    res.send(packageData(STATUS_CODE.SUCCESS,req.path,result))
                }else
                {
                    res.send(packageData(STATUS_CODE.SERVER_ERROR,req.path,null))
                }
            })
            break;
        case API_MAP.getAllChannel:
            sqlExecute(getAllChannel(),null,(result)=>{
                if(result)
                {
                    res.send(packageData(STATUS_CODE.SUCCESS,req.path,result))
                }else
                {
                    res.send(packageData(STATUS_CODE.SERVER_ERROR,req.path,null))
                }
            })
            break;
        case API_MAP.addChannel:
            let param = req.objs;
            const{channelName,descrpition}  = param
            console.log(param);
            let sqlParam =  [getUuid(),channelName,descrpition]
            if(!channelName)
            {
                res.send(packageData(STATUS_CODE.CHANNEL_PARAM_ERROR,req.path,null))
            }else {
                sqlExecute(addChannel(),sqlParam,(result)=>{
                    if(result)
                    {
                        res.send(packageData(STATUS_CODE.SUCCESS,req.path,null))
                    }else
                    {
                        res.send(packageData(STATUS_CODE.SERVER_ERROR,req.path,null))
                    }
                })
            }
            break;
        default:
            res.status(404).end();
    }
}
const packageData = (status,msg,data)=>{
    return {
        status:status,
        msg:msg,
        data:data,
    }
}


const sqlExecute = function(sql,param,callBack){
    db.con(connect=>{
        if(param)
        {
            connect.query(sql,param,(err,result)=>{
                console.log(sql);
                if(err){
                    callBack(null);
                }else {
                    callBack(result)
                }
            })
        }else {
            connect.query(sql,(err,result)=>{
                console.log(sql);
                if(err){
                    callBack(null);
                }else {
                    callBack(result)
                }
            })
        }

    })
}
const getUuid = ()=>{
    return uuid(11,16)
}
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data. At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}
app.all('*',(req,res)=>{
    switch (req.method){
        case HTTPMETHOD.GET:
            req.objs = req.query;
            getCallBack(req,res);
            break;
        case HTTPMETHOD.POST:
            req.objs = req.body;
            postCallBack(req,res);
            break;
        default:
            res.status(400).end();
    }
})

//app.get(apiMap.getAllCustomer, function (req, res) {
//    db.con(function(connect){
//        connect.query(getAllCustomer(), function(err, result){
//            if (err) {
//                console.log("select username:" + username + " error, the err information is " + err);
//                return
//            }else {
//                res.send({
//                    status:statusCode.success,
//                    msg:apiMap.getAllCustomer,
//                    data:result,
//                })
//            }
//            console.log(result)
//        })
//    })
//})
//app.get(apiMap.getAllChannel, function (req, res) {
//    db.con(function(connect){
//        connect.query(getAllChannel(), function(err, result){
//            if (err) {
//                console.log(getAllChannel());
//                return
//            }else {
//                res.send({
//                    status:statusCode.success,
//                    msg:apiMap.getAllChannel,
//                    data:result,
//                })
//            }
//            console.log(result)
//        })
//    })
//})



app.listen(_port?_port:9527, function (x) {
    console.log('Example app listening on port 9527!')
})


//app.get("/",(req,res)=>{
//    res.sendFile("index.html",{root:__dirname})
//}
//app.listen(9527, function () {
//    console.log('Example app listening on port 8080!')
//})
