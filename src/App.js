import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {sendMessage} from './chat';
import {recieveMessage} from './chat';



class App extends React.Component {





  render() {
    const {feed, sendMessage, recieveMessage} = this.props

  return (
    <div className="App">
      <header className="App-header">
   




        <ul>
         Hello Bot!
         { feed.map( message => {
           if (message.sender === "user") {
          //  return <div>{message.text}</div> }
         return null }
         } )}

        </ul>
        <input type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null} />

          { feed.map( message => {
          if (message.sender === "bot") {
       
              return <div>{message.text}</div>
              
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
