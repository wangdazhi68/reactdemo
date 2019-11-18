import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
export default class CommentItem extends Component{
    static propTypes={
        comment :PropTypes.object.isRequired,
        delComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    handleDel=()=>{
        const {comment,delComment,index}=this.props;
        delComment(index)
    }
    render(){
        const {comment}=this.props
        return(
            <div>
                <b onClick={this.handleDel}>删除</b>
                <p>{comment.username}</p>
                <p>{comment.content}</p>
            </div>
        )
    }
}