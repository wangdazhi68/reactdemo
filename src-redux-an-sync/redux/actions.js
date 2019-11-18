
import { INCREMENT, DECREMENT } from './action-types'
// 同步的action都返回一个对象
// 异步的action返回一个函数

export const increment=(number)=>({type:INCREMENT,data:number})
export const decrement=(number)=>({type:DECREMENT,data:number})
// 异步
export const incrementAsync=(number)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }
}