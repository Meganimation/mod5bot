import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div>
                This is the Projects page

                <h2> My previous projects </h2>

<br/>


<a href=''> InGame CC - Cryptocurrency Conversion</a>
<br/>
<br/>
<a href=''> JustStory - Create Your Own Spoken Story!</a>
<br/>
<br/>
<a href=''> Breddit - An Image Board about Bread</a>
<br/>
<br/>

                <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>
            </div>
        )
    }
}
