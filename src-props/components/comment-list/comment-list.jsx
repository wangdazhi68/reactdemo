import React,{Component} from 'react';
import PropTypes from 'prop-types';

import CommentItme from '../comment-item/comment-item';
export default class CommentList extends Component{

    //给组件类指定属性
    static propTypes={
        comments:PropTypes.array.isRequired,
        delComment:PropTypes.func.isRequired
    }
    render(){
        const {comments,delComment}=this.props
        return(
            <div>
                <ul>
                    {
                      comments.map((comment,index)=><CommentItme  comment={comment} key={index} delComment={delComment} index={index}/>)  
                    }
                </ul>
                
            </div>
        )
    }
} 


// CommentList.propTypes={
//     comments:PropYypes.array.isRequired
// }