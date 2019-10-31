import React, { Component } from 'react'
import {connect} from 'react-redux';
import {sendMessage} from '../chat';
import HeaderBar from './HeaderBar'
import Typing from 'react-typing-animation';


 class BotChatContainer extends Component {


//  this.props.location.state.users[0]
sayHello=()=>{

    if(this.props.name === undefined)
    return 'Welcome, guest!'
    else   
    return <div className='fade-in'> Hello {this.props.name}  <br/>
    <small> type stuff in below or else</small>
    
    
    </div>
 

 }

    render() {
   
        const {feed, sendMessage, recieveMessage} = this.props

        return (
            <div>
            <HeaderBar name={this.props.name} email={this.props.email} facebook_id={this.props.userID}   picture={this.props.picture} />
         
         
                   <h1 style={{
                height: '100px',
              
         
                padding: '20px'}}> {this.sayHello()}</h1>
                  <ul>
        { feed.map( message => {
          if (message.sender === "user") {
          //  return <div>{message.text}</div> }
          //post this as messages sender:user, content: message.text
          // this.setState({userMsgs: [...messages, message.text]})
        return null }
        })
        }

        </ul>
        <input className="fade-in" type="text" onChange={this.sayHello()} onKeyDown={(e) =>  e.keyCode === 13 ? sendMessage(e.target.value) : null} />

          { feed.map( message => {
          if (message.sender === "bot") {
         
          return <div className="fade-out">

            <Typing speed = {38}>

            {message.text}
            
              </Typing >
              </div>
        
                //post this as messages reciever:bot, content: message.text
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



