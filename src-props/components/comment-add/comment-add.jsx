import React,{Component} from 'react';

import PropTypes from 'prop-types';

export default class CommentAdd extends Component{
    static propTypes={
        addComment:PropTypes.func.isRequired
    }
    state={
        username:'',
        content:''
    }
    handleSubmit=()=>{
        //收集数据
        const comment=this.state
        //更新状态
        this.props.addComment(comment)
        //清除页面输入框数据
        this.setState({
            username:'',
            content:''
        })
    }
    handleNameChange=(event)=>{
        const username=event.target.value
        this.setState({username})
    }
    handleContentChange=(event)=>{
        const content=event.target.value
        this.setState({content})
    }
    render(){
        const {username,content}=this.state
        return(
            <div>
                <div className="form">
                    <label>用户名</label>
                    <input type="text" value={username} onChange={this.handleNameChange}/>
                    <br/>
                    <label>评论内容</label>
                    <input type="text" value={content} onChange={this.handleContentChange}/>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                
            </div>
        )
    }
}