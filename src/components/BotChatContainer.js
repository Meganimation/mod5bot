import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../chat';
import HeaderBar from './HeaderBar';
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
import Success from './Success'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatLog from './ChatLog';


class BotChatContainer extends Component {


  state = {
    autosave: false,
    feed: this.props.feed
  }


  deleteDivs=()=>{

    if (document.querySelector('.fade-out') == null) {
        return ('')
    }
    else 

        {document.querySelector('.fade-out').remove()}
};




toggleAutoSave=()=> {
  console.log(this.state.autosave)

  if (this.state.autosave === false) {
    this.setState({autosave: true})
  }

  if (this.state.autosave === true)  {
    this.setState({autosave: false})
  }
}



sayHello=()=>{
    // if(this.props.name === undefined)
    // return 'Welcome, guest!'
    // else   
    return <div className='fade-in'> Hello {window.localStorage.name}  <br/>
    <small> type stuff in below or else</small>    
    </div>
}

saveConvo=()=> {
// console.log(this.props.feed.map(text => {return text.text}))
var text = this.props.feed;
var i = 0;
while (i < text.length) {

    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: text[i].text,
          sender_id: window.localStorage.id,
          reciever_id: 1
      })
    })
      .then(i++)

  }
this.showSuccess()
}


  showSuccess=()=>{
    alert('saved!')  
  }

    render() {

const {feed, sendMessage, recieveMessage} = this.props
const on = `${this.state.autosave}`


  return (
    <div>

      {this.deleteDivs()}
      <HeaderBar id={window.localStorage.id} name={window.localStorage.name} email={window.localStorage.email} facebook_id={this.props.userID}   picture={window.localStorage.picture} toggleAutoSave={this.toggleAutoSave}/>
      
      <h1 style={{ height: '100px', padding: '20px'}}> Hi.</h1>
      <ul> { feed.map( message => { if (message.sender === "user" && this.state.autosave === true) {
          fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: message.text,
              sender_id: window.localStorage.id,
              reciever_id: 1
          })
        })
          .then(console.log(message.text))
      }
        return null })}
        </ul>
        


        <input className="fade-in" type="text"  onKeyDown={(e) =>  e.keyCode === 13 ? sendMessage(e.target.value) : null} />

<br/>
<br/>

    <button onClick={this.toggleAutoSave} > Toggle Autosave: {on} </button> 
    <br/>

    <Link to={{ pathname: '/success', state: { sender: this.props.id} }}>
    <button disabled={this.state.autosave} onClick={this.saveConvo}> Save Convo </button> 
    </Link>
    

    { feed.map( message => {
      if (message.sender === "bot") {
      if (message.sender === "bot" && this.state.autosave === true) {
              fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  content: message.text,
                  sender_id: window.localStorage.id,
                  reciever_id: 1
              })
            })
              .then(console.log(message.text))
          }




          // setTimeout(function(){
     
          //   {document.querySelector('.fade-out').remove()}
          // }, 1000);

          return <div className="fade-out">

            <Typing speed = {18}>
            {message.text}
              </Typing >
              </div>
          }
          }) }
        {feed.sender}
        </div>
  )
}};




const mapStateToProps = state => ({
    feed: state
  });

  export default connect(mapStateToProps, {sendMessage})(BotChatContainer);