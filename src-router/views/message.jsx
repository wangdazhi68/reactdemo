import React,{Component} from 'react';
import { NavLink,Route } from 'react-router-dom';

import MessageDetail from './message-detail';
export default class Message extends Component{

    state={
        messages:[
            
        ]
    }
    componentDidMount(){
        //模拟异步获取数据
        setTimeout(()=>{
            const messages=[
                {id:1,title:'message001'},
                {id:2,title:'message002'},
                {id:3,title:'message003'},
            ]
            this.setState({
                messages
            })
        },1000)
    }
    showdetail=(id)=>{
        this.props.history.push(`/home/message/messagedetail/${id}`)
        // 除了push，还有以下链接方式
        //replace
        //goBack 回退
        //goForward 前进
    }
    render(){
        const {messages}=this.state
        return(
            <div>
                <ul>
                    {
                        messages.map((m,index)=>(
                            <li key={index}>
                                <NavLink to={`/home/message/messagedetail/${m.id}`} activeClassName="activeClass">{m.title}</NavLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {/* 这种写法参数只是event，所以要写成下面的方法 */}
                                {/* <button onClick={this.showdetail}>look</button> */}
                                <button onClick={()=>{this.showdetail(m.id)}}>look</button>
                            </li>
                        ))
                    }
                </ul>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}></Route>
            </div>
        )
    }
}