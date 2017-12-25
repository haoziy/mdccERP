import axios from 'axios';
import {
  message
} from 'antd';

//get方法
export const get = ({url,msg = '接口异常',headers}) => {
  axios.get(url, headers).then(res => res.data).catch(err => {
    console.log(err);
    message.warn(msg);
  })
}

//post方法
export const post = ({url,data,msg = '接口异常',headers})=>{
  axios.post(url,data,headers).then(res => res.data).catch(err =>{
    console.log(err);
    message.warn(msg);
  })
}