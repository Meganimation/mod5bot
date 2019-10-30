import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {sendMessage} from './chat';
import Facebook from './components/Facebook';



class App extends React.Component {





  render() {
    const {feed, sendMessage, recieveMessage} = this.props

  return (
    <div className="App">
      <header className="App-header">

      <Facebook />

{/* reminder: bot needs its own component

messages need to be saved to rails, consider looking up about that css pop up box and also the original redux bot lecture

user model will have same attributes at facebook data and be used to store messages 

message will be joiner of user and bot

user has many msgs, bot has many msgs.

task for tomorrow: fix components slightly, do redux labs, maybe try get linked in or google auth */}



        <ul>
       
         { feed.map( message => {
           if (message.sender === "user") {
          //  return <div>{message.text}</div> }
           //post this as messages sender:user, content: message.text
          // this.setState({userMsgs: [...messages, message.text]})
         return null }
         } )}

        </ul>
        <input type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null} />

          { feed.map( message => {
          if (message.sender === "bot") {

          return <div>{message.text}</div>
                //post this as messages reciever:bot, content: message.text
            
      
              
        }})}

        {feed.sender}
        

      </header>
    </div>
  )
}};




const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps, {sendMessage})(App);
