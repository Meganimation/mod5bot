import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

export default class Projects extends Component {






popUp=(event)=>{
    debugger

    if ( event.target.innerText == 'InGame CC - Cryptocurrency Conversion' ) {

    
  window.open('https://morning-crag-16734.herokuapp.com/')  }

  if ( event.target.innerText == 'JustStory - Create Your Own Spoken Story!' ) {

    
    window.open('https://javascript.info')
  }
}

  
    render() {
        return (
            <div>

                      <HeaderBar/>
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
                <div className ="fade-in">
                <div className="myMainBoxx">
    

                <h2> previous projects </h2>

<br/>
<br/>
<br/>


<button className="myOtherHomeButton" onClick={this.popUp}>
 InGame CC - Cryptocurrency Conversion </button>
<br/>
<br/>

<button className="myOtherHomeButton" onClick={this.popUp}>JustStory - Create Your Own Spoken Story!</button>
<br/>
<br/>
<br/>
<br/>

                <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>


</div>
            </div>
            </div>
        
            
        )
    }
}
