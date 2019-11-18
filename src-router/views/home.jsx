import React,{Component} from 'react';
import { NavLink,Switch,Route,Redirect } from 'react-router-dom';

import News from './news';
import Message from './message';
export default class Home extends Component{
    render(){
        return(
            <div>
               <h2>Home route cpmpent</h2> 
               <div>
                   <ul>
                        <li><NavLink to='/home/news' activeClassName="activeClass">News</NavLink></li>
                        <li><NavLink to='/home/message' activeClassName="activeClass">Message</NavLink></li>
                   </ul>
                   <div>
                        <Switch>
                            <Route path='/home/news' component={News} ></Route>
                            <Route path='/home/message' component={Message}></Route>
                            <Redirect to="/home/news "></Redirect>
                        </Switch>
                   </div>
               </div>
            </div>
        )
    }
}
