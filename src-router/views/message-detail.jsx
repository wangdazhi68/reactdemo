import React,{Component} from 'react';

export default class MessageDetail extends Component{
    render(){
        const {id}=this.props.match.params;
        const message=Allmessages.find((m)=>m.id===id*1)
        return(
            <div>
                <ul>
                    <li>Id:{message.id}</li>
                    <li>Title:{message.title}</li>
                    <li>Content:{message.content}</li>
                </ul>
            </div>
        )
    }
}
const Allmessages=[
    {id:1,title:'message001',content:'1111'},
    {id:2,title:'message002',content:'2222'},
    {id:3,title:'message003',content:'3333'},
]