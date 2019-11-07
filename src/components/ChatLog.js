import React, { Component } from 'react'
import Chats from './Chats'
import { Link } from 'react-router-dom';
import BotChatContainer from './BotChatContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class ChatLog extends Component {



state={
    messages: [],
    displayedMessages: [],
    deleted: false,
    deletedMessages: []
}

    componentDidMount(){
        fetch(`http://localhost:3000/messages`)
        .then( res => res.json())
        .then( data => this.setState({ messages: data,
            displayedMessages: data}))
    }


    // componentDidMount(){
    //     fetch(`http://localhost:3000/senders`)
    //     .then( res => res.json())
    //     .then( data => this.setState({ sender: data}))
    // }


    deleteMsg=(event)=>{
        var answer = window.confirm('are you sure?')
        if (answer) {
            this.deleteMsgConfirmed(event.target.value)
            event.target.parentElement.innerText = 'DELETED'
        }
    }

    deleteMsgConfirmed=(messageID)=>{
        fetch(`http://localhost:3000/messages/${messageID}`, {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json)
            .then(this.setState({deletedMessages: [...this.state.deletedMessages, messageID]}))
    }


    deleteAll=()=>{
        var answer = window.confirm('are you sure?')
        if (answer) {
            this.state.messages.map((msg) => {
                fetch(`http://localhost:3000/messages/${msg.id}`, {
                    method: 'DELETE', 
                    headers: {
                    'Content-Type': 'application/json',
                    },
                })
                    .then(resp => resp.json)
                    .then(this.setState({deleted: true}))
                }
            )}}


    allMessages=()=>{
        if (window.localStorage.id === undefined) {
            return ('You must log in to view chat logs!'  )
            }
        if (window.localStorage.id !== undefined)  {
                return this.state.displayedMessages.map((message) => {     
                return <Chats key={message.id} deleteMsg={this.deleteMsg} message={message} deletedMessages={this.state.deletedMessages} userID={window.localStorage.id}/>}
            )}}

         
        
                

    render() {





        
        return (
            this.state.deleted === true ?  <p>    
            <Link 
            to={{ pathname: '/home', 
            state: { deleted: this.state.deleted} }}>    
            <button  className="myOtherHomeButton"> Home </button> </Link>  
            
            <h3> all messages have been deleted.</h3> </p>
            
            :
            
            <div>



<h2> Your Chatlog </h2>

<div className='myBox'>

    <br/>
    <Link exact to="/home" > 
    <button onClick={this.deleteDivs} className="myOtherHomeButton"> Home </button>
    </Link>
    <br/>

                <button onClick={this.deleteAll}> Delete Convo </button>
                <br/>
                <br/>
                {this.allMessages()}
                {/* //maybe do one bot message, and one user message? */}
            </div>
            </div>
        )
    }

}