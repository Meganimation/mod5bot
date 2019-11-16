import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../chat';
import HeaderBar from './HeaderBar';
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
import Success from './Success'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatLog from './ChatLog';
import Bot from './Bot';

import Particles from 'react-particles-js';

class BotChatContainer extends Component {


  state = {
    autosave: false,
    feed: this.props.feed,
    background: "",
    defaultBackground: true,
    beginningimgsrc: 'megbot.gif',
    imgsrc: 'megbotSTATIC.gif'
  }







  boxClickk = (e) => {

 
      setTimeout(function() {

      if (localStorage.botSpeech.length > 15 && localStorage.botSpeech.includes('understand') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 3800) 
       return this.setState({
          imgsrc: 'confusion.gif'
      }) 
      }


      if (localStorage.botSpeech.length > 15 && localStorage.botSpeech.includes('Soz') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 2200) 
       return this.setState({
          imgsrc: 'sorry.gif'
      }) 
      }

      if (localStorage.botSpeech.length < 15 && localStorage.botSpeech.includes('Sorry') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 800) 
       return this.setState({
          imgsrc: 'sorry.gif'
      }) 
      }

      if (localStorage.botSpeech.length > 15 && localStorage.botSpeech.includes('Sorry') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 2000) 
       return this.setState({
          imgsrc: 'sorry.gif'
      }) 
      }

      if (localStorage.botSpeech.includes('u wot') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 800) 
       return this.setState({
          imgsrc: 'anger.gif'
      }) 
      }

      if (localStorage.botSpeech.length < 15 && localStorage.botSpeech.includes('What?') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 800) 
       return this.setState({
          imgsrc: 'anger.gif'
      }) 
      }


      if (localStorage.botSpeech.length < 15 && localStorage.botSpeech.includes('Soz') == true) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 800) 
       return this.setState({
          imgsrc: 'sorry.gif'
      }) 
      }

      setTimeout(function() {
        console.log('hello!')
      }.bind(this), 600) 


      if (localStorage.botSpeech.length < 15 && localStorage.botSpeech.includes('??') == true)  { 
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 600) 
        return this.setState({
          imgsrc: 'confusion.gif'
      }) 
      }

      if (localStorage.botSpeech.length < 15 && localStorage.botSpeech.includes(':)') == true)  { 
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 600) 
        return this.setState({
          imgsrc: 'proud.gif'
      }) 
      }

      if (localStorage.botSpeech.length > 15 && localStorage.botSpeech.includes(':)') && localStorage.botSpeech.length < 30 == true)  { 
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 1700) 
        return this.setState({
          imgsrc: 'proud.gif'
      }) 
      }

      if (localStorage.botSpeech.length < 3 == true)  { 
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 100) 
        return this.setState({
          imgsrc: 'confusion.gif'
      }) 
      }


      if (localStorage.botSpeech.length > 30 && localStorage.botSpeech.includes(':)') == true)  { 
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 2800) 
        return this.setState({
          imgsrc: 'proud.gif'
      }) 
      }


      else {
        if (localStorage.botSpeech.length < 17 && localStorage.botSpeech.length > 12 == true  ) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 800) 
       return this.setState({
          imgsrc: 'lipSyncS.gif'
      }) 
      }

      if (localStorage.botSpeech.length < 12 == true  ) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 400) 
       return this.setState({
          imgsrc: 'lipSyncS.gif'
      }) 
      }

      if (localStorage.botSpeech.length > 17 && localStorage.botSpeech.length < 30 == true ) {
        setTimeout(function() {
          this.setState({
            imgsrc: 'megbotSTATIC.gif'
        }) 
        }.bind(this), 1400) 
       return this.setState({
          imgsrc: 'lipSyncL2.gif'
      }) 
      }




   


  else {
    setTimeout(function() {
      this.setState({
        imgsrc: 'megbotSTATIC.gif'
    }) 
    }.bind(this), 1000) 
   return this.setState({
      imgsrc: 'lipSyncL2.gif'
  }) 
  }
      }






  }.bind(this), 400) }

  
  

  
    
  





deleteDivs=()=>{
    if (document.querySelector('.fade-out') == null) {
        console.log('dd')
    }
    else 
    if (document.querySelector('.fade-out').innerText.length > 30) {
        {document.querySelector('.fade-out').remove()} }
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
var i = 0
var message = this.props.feed


while (i < this.props.feed.length) {

  if (message[i].sender === "bot") {
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message[i].text,
        reciever_id: 1,
    })
  })
  .then(i++)
  }
    
    else {
      fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: message[i].text,
          sender_id: window.localStorage.id,
      })
  })  
 .then(i++)
      }
  }

}

lipSync=(msg)=>{

  // should probably keep the mouth attached to character

  // if (msg.length > 10) {
  // // return <img src='megbotMouth.png' /> 
  // }
  // if (msg.length < 10) {
  //   // return <img src='megbotMouth.png' /> 
  // }
  // if (msg.includes("soz")) {
  //  alert("it includes soz!")
  //   // return sad megbot
  // }

  //do one for soz, u wot m8, don't understand
}

  // showSuccess=()=>{
  //   alert('saved!')  
  // }

    render() {


      

const {feed, sendMessage, recieveMessage} = this.props
const on = `${this.state.autosave}`


  return (
    <div>

      {this.deleteDivs()}
      <HeaderBar id={window.localStorage.id} name={window.localStorage.name} email={window.localStorage.email} facebook_id={this.props.userID}   picture={window.localStorage.picture} toggleAutoSave={this.toggleAutoSave}/>

      
      <h1 style={{ height: '100px', padding: '20px'}}> </h1>
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
       

          })
        })
          .then(console.log(message.text))
      }
        return null })}
        </ul>

  





        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
   



        <input className="myForm" type="text" onKeyDown={(e) =>  e.keyCode === 13 ? this.boxClickk() : null} onKeyUp={(e) =>  e.keyCode === 13 && e.target.value.length > 1 ? sendMessage(e.target.value) : null} />

<br/>
<br/>

    <button className="myOtherHomeButton" onClick={this.toggleAutoSave} > Toggle Autosave: {on} </button> 
    <br/>
    <br/>

    <Link to={{ pathname: '/success', state: { sender: this.props.id} }}>
    <button className="myOtherHomeButton" disabled={this.state.autosave} onClick={this.saveConvo}> Save Convo </button> 
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
           
                  reciever_id: window.localStorage.id
              })
            })
              .then(console.log(message.text))
          }

   

      
        

          // setTimeout(function(){
     
          //   {document.querySelector('.fade-out').remove()}
          // }, 1000);
          var msg = new SpeechSynthesisUtterance(message.text);
          msg.lang = 'en-IE'
      

          return <>
           
        

          <div className="fade-out">        
            <Typing speed = {18}>  
            {localStorage.botSpeech}
            {/* set to message.text if you want fb to work properly */}
              </Typing >
         
              </div>
              <Bot beginningimgsrc={this.state.beginningimgsrc} imgsrc={this.state.imgsrc} />
              </>
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