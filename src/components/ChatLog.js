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

        if (this.state.displayedMessages.length < 1) {
            return ('There are no messages here!')
        }
        if (window.localStorage.id === undefined) {
            return ('You must log in to view chat logs!'  )
            }
        if (window.localStorage.id !== undefined  && this.state.displayedMessages.length > 1)  {
                return this.state.displayedMessages.map((message) => {     
                return <Chats key={message.id} deleteMsg={this.deleteMsg} message={message} deletedMessages={this.state.deletedMessages} userID={window.localStorage.id}/>}
            )}}



            sortThings = (event) => {
     

         
                if (event.target.innerText ==  "Sort By: Oldest") {
                    this.setState({displayThings : this.state.displayedMessages.sort((thingA, thingB) => thingA.created_by > thingB.created_by ? 1 : -1)})
                    
               return event.target.innerText = "Sort By: Newest"
                }
                if (event.target.innerText ==  "Sort By: Newest") {
                    this.setState({displayThings : this.state.displayedMessages.sort((thingA, thingB) => thingA.created_by < thingB.created_by ? 1 : -1)})
                 return   event.target.innerText = "Sort By: Oldest"
                }

            }
        
                

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





<div >

    <br/>
    <Link exact to="/home" > 
    <button onClick={this.deleteDivs} className="myOtherHomeButton"> Home </button>
    </Link>


                <button className='myOtherHomeButton' onClick={this.deleteAll}> Delete Convo </button>
  
         
                
                <button className='myOtherHomeButton' onClick={this.sortThings}> Sort By: Oldest </button>
                <br/>
                <br/>
                <br/>
                <br/>
                {this.allMessages()}
                {/* //maybe do one bot message, and one user message? */}
            </div>
            </div>
        )
    }

}