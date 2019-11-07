import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import BotChatContainer from './BotChatContainer';
import HeaderBar from './HeaderBar';
import ls from 'local-storage';


export default class Facebook extends Component {
    state = {
        users: [],

   
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        id: 0
        

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

    ls.set('userID', response.userID);

    ls.set('name', response.name);

    ls.set('email', response.email);

    ls.set('picture', response.picture.data.url);

 
// Need to save this to localstorage or global state

    const matchId=()=> {
        this.state.users.map((user) => {
            if (user.facebook_id === parseInt(response.userID))     {
                this.setState({
                    id: user.id
                })
                ls.set('id', user.id);
     
           console.log(`welcome back ${user.id}`)   }
        })
    }
    

 
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
              picture: response.picture.data.url
       
            })
          })
          .then(matchId)
    }





        
    render() {



        let fbContent;
     
        if(this.state.isLoggedIn) {
   
        
            fbContent = 
            <div> 
            <BotChatContainer id={window.localStorage.id} name={window.localStorage.name} email={this.state.email} facebook_id={this.state.userID}   picture={window.localStorage.picture}  />      
            

            </div>;

        } else {
            fbContent = ( 
            <div >
                

            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            
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
