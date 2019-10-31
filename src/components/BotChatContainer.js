import React, { Component } from 'react'
import {connect} from 'react-redux';
import {sendMessage} from '../chat';


 class BotChatContainer extends Component {


//  this.props.location.state.users[0]
sayHello=()=>{

    if(this.props.name === undefined)
    return 'Welcome, guest!'
    else   
    return `Hello ${this.props.name}`
 }

    render() {
   
        const {feed, sendMessage, recieveMessage} = this.props

        return (

         
            <div>
                   <h1 style={{
                height: '100px',
                width: '900px',
         
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
        <input type="text" onChange={this.sayHello()} onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null} />

          { feed.map( message => {
          if (message.sender === "bot") {

          return <div>{message.text}</div>
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



