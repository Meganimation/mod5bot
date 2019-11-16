import React, { Component } from 'react' 


export default class Chats extends Component {


theName=()=>{
    if (this.props.message.sender_id ==  null)
    return (<> <br/><br/> <div className="yourBox"> 
        {this.props.message.content}    <br/> <small> {this.props.message.created_at}   
        <p/>    <p/>  
        <br/>
        <button className="myOtherHomeButton" value={this.props.message.id} onClick={this.props.deleteMsg}>x</button> </small> </div> </>)
    else
    return  <> <br/><br/> <div className="myBox"> 
    {this.props.message.content}    <br/> <br/> <small> {this.props.message.created_at} 
    <p/><p/>   
    <br/>
    <button className="myOtherHomeButton" value={this.props.message.id} onClick={this.props.deleteMsg}>x</button>  </small> </div> </>
}

myMessages=()=>{
    if (window.localStorage.id == this.props.message.sender_id || this.props.message.reciever_id  ) {
        return  (
        <>        
        {this.theName()}
        </>     )
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
  
 
        return (
            <>
        {this.showMessages()}
        </>
        )
    }
}
