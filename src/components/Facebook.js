import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import BotChatContainer from './BotChatContainer';
import HeaderBar from './HeaderBar';


export default class Facebook extends Component {
    state = {
        users: [],

   
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
        

    }


    componentDidMount() {
        fetch('http://localhost:3000/senders')
        .then( res => res.json())
        .then( data => this.setState({ users: data}))
    }


    responseFacebook = response => {
       
    console.log(response) // save to backend?




    this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email, 
        picture: response.picture.data.url
    })



    // this.state.users.map((user) => {
    //     if (user.facebook_id === parseInt(response.userID))     {
 
    //    console.log(`welcome back ${user.facebook_id}`)   }
    
    //    if (user.facebook_id !== parseInt(response.userID)) {
    //     console.log('text')
    //      return saveUser()  } })
 
        fetch('http://localhost:3000/senders', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: response.name,
              email: response.email,
              facebook_id: response.userID,
       
            })
          })
          .then(alert('done'))       
    }





        
    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = 
            <div> 
            <BotChatContainer name={this.state.name} email={this.state.email} facebook_id={this.state.userID}   picture={this.state.picture}  />      
            

            </div>;

        } else {
            fbContent = ( 
            <div >
                
                
                <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
         
            <br/>
            <br/>
            <FacebookLogin
            appId="1378656285636593"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} /> 
            

            <br/>
            <br/>
            <br/>
          
            
             <Link exact to="/home"><button className="myButton">login as guest</button></Link>
             <br/>
            <br/>
            <br/>

      

             </div>
            );





        }



        return (
            <div >
     
           {fbContent}
        
            </div>
        )
    }
}
