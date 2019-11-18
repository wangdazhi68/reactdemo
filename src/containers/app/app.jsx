import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import {connect} from "react-redux";

import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';
import {addComment,delComment,getComments} from "../redux/actions";

class App extends Component{
    
    static propTypes={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        delComment:PropTypes.func.isRequired,
        getComments:PropTypes.func.isRequired,
    }


    componentDidMount(){
        this.props.getComments()
    }
    //添加评论
    addComment=(comment)=>{
        const {comments}=this.props;
        comments.unshift(comment)
        this.setState({comments})
    }
    //删除评论
    delComment=(index)=>{
        const {comments}=this.props;
        comments.splice(index,1) 
        this.setState({comments})
    }
    //非受控组件ref的获取
    search=()=>{
        const searchname=this.input.value
    }
    render(){
        const {comments,addComment,delComment}=this.props;
        return(
            <div>
                {/* 演示注意事项部分，行内样式的写法 */}
                <div style={{display:'none'}}>
                    {/* 标签要有结束标签,非受控组件ref的写法,class要写成className */}
                    <input type="text" className="aaa" ref={input=>this.input=input}/>
                </div>
                

                <div>
                    <CommentAdd addComment={addComment}/>
                    <CommentList comments={comments}  delComment={delComment}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>({comments:state}),
    {addComment,delComment,getComments}
)(App)