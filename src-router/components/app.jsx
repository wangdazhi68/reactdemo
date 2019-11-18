import React,{Component} from 'react';
import { NavLink,Switch,Route,Redirect } from 'react-router-dom';

import About from '../views/about';
import Home from '../views/home';
export default class App extends Component{
    render(){
        return(
            <div>
                <ul style={{float:'left',width:'10%'}}>
                    <li><NavLink to='/about' activeClassName="activeClass">About</NavLink></li>
                    <li><NavLink to='/home' activeClassName="activeClass">Home</NavLink></li>
                </ul>
                <div className="contnet" style={{float:'left',width:'80%',background:'#f5f5f5'}}>
                    <Switch>
                        <Route path='/about' component={About} ></Route>
                        <Route path='/home' component={Home}></Route>
                        <Redirect to="/about"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
