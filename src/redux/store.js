import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";

import { comments } from "./reducers";
//生成一个store对象，内部会第一次调用render函数得到初始的state
const store = createStore(comments,applyMiddleware(thunk));//应用异步的中间件
//console.log(store,store.getState())
export default store