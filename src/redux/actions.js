
import { ADD_COMMENT, DELETE_COMMENT ,RECEIVE_COMMENTS} from './action-types'

export const addComment=(comment)=>({type:ADD_COMMENT,data:comment})
export const delComment=(index)=>({type:DELETE_COMMENT,data:index})
//同步接收comments
const receiveComments=(comments)=>(
    {
        type:RECEIVE_COMMENTS,
        data:comments
    }
)


// 异步
export const getComments=()=>{
    return dispatch=>{
        setTimeout(()=>{
            const comments=[
                {username:"tom",content:"react"},
                {username:"jack",content:"vue"}
            ]
            //分发一个同步的action
            dispatch(receiveComments(comments))
        },1000)
    }
}