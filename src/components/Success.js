import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Success extends Component {


    saveConvo=()=> {

        console.log(this.props.feed.map(text => {return text.text}))
      
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
                sender_id: this.props.id
            })
          })
            .then(i++)
      
        }
      this.showSuccess()
      }


      
    render() {
        return (
          <div className="mySuccessBox">
                <h2>your chat has been saved! </h2>
                <br/>
              
                
                <Link 
        to={{ pathname: '/chatlog', 
        state: { sender: this.props.id} }}> <button className="myOtherHomeButton">chatlog</button> </Link> 
        <br/>

                <br/>
                <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>
            </div>
        )
    }
}
