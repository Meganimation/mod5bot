import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ls from 'local-storage';

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
                <h1> This is the Settings page </h1>

<br/>  Name:   {window.localStorage.name}    <button onClick ={this.updateName}>change</button> <br/>
<br/>  email:   {window.localStorage.email}     <button onClick ={this.updateEmail}>change</button> <br/>
<br/>
<br/>

<button onClick={this.logout}> log out </button>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




    <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>
            </div>
        )
    }
}
