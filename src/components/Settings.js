import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ls from 'local-storage';
import HeaderBar from './HeaderBar';

export default class Settings extends Component {



updateName=()=>{

    var updateName = prompt('Please enter the new name', 'name')


    if (updateName == null || updateName == "")  {
     const  txt = ''
     return txt
     } 

     
        else {
           fetch(`http://localhost:3000/senders/${window.localStorage.id}`, {
               method: 'PATCH', 
               headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
               },
               
               body: JSON.stringify({
                   name: updateName
               })
           })
               .then(resp => resp.json()) 
               .then(ls.set('name', updateName))
       }


       const   txt = `Your new name is now ${updateName}.`;
       window.location.reload();

       return alert(txt)


         
     }



updateEmail=()=>{

    var updateEmail = prompt('Please enter the new email', 'email')


    if (updateEmail == null || updateEmail == "")  {
     const  txt = ''
     return txt
     } 

     if (updateEmail.includes('@'))  {
      fetch(`http://localhost:3000/senders/${window.localStorage.id}`, {
               method: 'PATCH', 
               headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
               },
               
               body: JSON.stringify({
                   email: updateEmail
               })
           })
               .then(resp => resp.json()) 
               .then(ls.set('email', updateEmail))
    

       window.location.reload();
       const   txt = `Your new email is now ${updateEmail}.`;
       

       return alert(txt) 
    }


       else alert('you must enter a valid email!')


         
     }

     logout() {
        localStorage.clear();
        window.location.href = '/';
    }



    render() {
        return (
            <div>
                
                <HeaderBar/>
                <div className ="fade-in">
               
                <br/>
        <br/>
        <br/>
        <br/>
        <br/>
  
      
        
                <div className="myMainBoxx">
           
    
                <img src="https://img.icons8.com/cotton/2x/settings--v1.png" />
                <h2>  settings </h2>   
                <br/>
<br/>
<br/>
<br/>      
<br/>  <h3>name:   {window.localStorage.name} </h3> <br/>
  <button className="myOtherHomeButton" onClick ={this.updateName}>change</button> <br/>
<br/>  <h3> email:   {window.localStorage.email}   </h3> <br/> 
 <button className="myOtherHomeButton"  onClick ={this.updateEmail}>change</button> <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<button className="myOtherHomeButton" onClick={this.logout}> log out </button>
<br/>
<br/>


    <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>
            </div>
            </div><div></div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        )
    }
}
