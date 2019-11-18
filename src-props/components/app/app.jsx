import React,{Component} from 'react';

import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends Component{
    // 第一种写法
    // constructor(props){
    //     super(props)
    //     this.state={
    //         comments:[
    //             {username:"tom",content:"henha"},
    //             {username:"jack",content:"dasdasad"}
    //         ]
    //     }
    // }
    // 第二种写法
    // 给组件对象指定state属性
    state={
        comments:[
            {username:"tom",content:"react"},
            {username:"jack",content:"vue"}
        ]
    }
    //添加评论
    addComment=(comment)=>{
        const {comments}=this.state;
        comments.unshift(comment)
        this.setState({comments})
    }
    //删除评论
    delComment=(index)=>{
        const {comments}=this.state;
        comments.splice(index,1) 
        this.setState({comments})
    }
    //非受控组件ref的获取
    search=()=>{
        const searchname=this.input.value
    }
    render(){
        const {comments}=this.state;
        return(
            <div>
                {/* 演示注意事项部分，行内样式的写法 */}
                <div style={{display:'none'}}>
                    {/* 标签要有结束标签,非受控组件ref的写法,class要写成className */}
                    <input type="text" className="aaa" ref={input=>this.input=input}/>
                </div>
                

                <div>
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments}  delComment={this.delComment}/>
                </div>
            </div>
        )
    }
}