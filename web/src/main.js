import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const menu= [
    '客户管理',
    '分段管理',
    '渠道管理',
    '员工管理',
]

const render = (App) => {
    ReactDOM.render(
        <div style={{}}>
            <div style={{flex:1}}>
                <div style={{height:100,backgroundColor:'#F00',display: 'flex',alignItems:'center'}}>
                    <App name="laomi"/>
                </div>
                <div style={{flex:1,backgroundColor:'#FFF',flexDirection:'row',display: 'flex'}}>
                    <div style={{width:150,}}>
                        {menu.map((k)=>{
                            return (
                                <div style={{paddingLeft:10,height:44,borderBottom:'1px solid #000'}}>
                                    <p>{k}</p>
                                </div>

                            )
                        })}
                    </div>
                    <div style={{flex:1,backgroundColor:'#0FF',flexDirection:'row',display: 'flex'}}>
                        {['a','b','c','d','e'].map((k)=>{
                            return (
                                <p>{k}</p>
                            )
                        })}
                    </div>
                </div>
            </div>


        </div>
       ,
        document.getElementById('app')
    )
}



render(App)

//if (module.hot) {
//    module.hot.accept('./App', () => render(App))
//}
//import React from 'react'
//import ReactDOM from 'react-dom'
//
//ReactDOM.render(
//    <h1>Hello, world! laomi  </h1>,
//    document.getElementById('app')
//)