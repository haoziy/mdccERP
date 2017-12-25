import axios from 'axios';
import { get } from './tool';
import * as config from './config';

export const getPros = () =>axios.post('url',{
  category:"trending",
  period:"day",
  lang:"javascript",
  offset:0,
  limit:30
}).then(function (response){
  return response.data;
}).catch(function (error){
  console.log(error);
});

export const npmDependencies = () => axios.get('./npm.json').then(res=> res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

const GIT_OAUTH = 'https://github.com/login/oauth';
