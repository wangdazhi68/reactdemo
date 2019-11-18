import React,{Component} from 'react';

export default class News extends Component{

    state={
        newsArr:[
            "news01",
            "news02",
            "news03",
        ]
    }
    render(){
        const {newsArr}=this.state
        return(
            <div>
                <ul>
                    {
                        newsArr.map((news,index)=><li key={index}>{news}</li>)
                    }
                </ul>
            </div>
        )
    }
}