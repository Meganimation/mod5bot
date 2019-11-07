import React, { Component } from 'react' 


export default class Chats extends Component {



myMessages=()=>{

    if (window.localStorage.id == this.props.message.sender_id) {
        
        return  (
        <>
        
        <button value={this.props.message.id} onClick={this.props.deleteMsg}>x</button> 
        {this.props.message.content} -   {this.props.message.created_at} -  {this.props.message.sender.name}
        <br/>
        </> )
    }
    else return ('')
}

    showMessages=()=>{




        
        if (this.props.deletedMessages.includes(this.props.message.id)) {
            console.log(`deleting ${this.props.message.content}`)
        return (<div className="fade-out"> DELETED </div>)}
        else
        return (
            <div>
       
               {this.myMessages()}
            </div>
        )
    
    }




 messagelist=()=> { 
    this.props.message.messages.map((message) => {
        return message.content })
 }




    render() {
        debugger

 
        return (
            <>
        {this.showMessages()}
        </>
        )
    }
}
