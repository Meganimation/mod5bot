import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HeaderBar extends Component {


    openNav=(e)=> {
        console.log('clicked')
     

      
      if (document.querySelector(".sidebar").style.width = "0px"
      ) {
      document.querySelector(".sidebar").style.width = "250px"
      document.querySelector(".sidebar").marginLeft = "250px"
       }

       
       
    }
       
       /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
     closeNav=(e)=>{
         console.log('clicked')

     if (document.querySelector(".sidebar").style.width = "250px") {
        document.querySelector(".sidebar").style.width = "0px"
        document.querySelector(".sidebar").marginLeft = "0px";}
      
       }


    render() {
        return (

         
         <div style={{
       
                width: '900px',
                margin: 'auto',
                padding: '20px'
            }}>
     
          
              <li><a href="#" class="round green" onClick={this.openNav}>≣<span class="round"></span></a></li>

<div id="main">

  

</div>
                    
{/*                 
                 <nav>
  <ul>
    <li>
      <a href="#"></a>
    </li>
    <li>
    <a href="#">      </a>
  
    </li>
  
    <li>
      <a href="#"></a>
    </li>
    <li>
      <a href="#"></a>
    </li>
  </ul>
</nav>    */}



<div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
  <a href="#">   <br></br>  {this.props.name}
 </a>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>




  <Link 
        to={{ pathname: '/chatlog', 
        state: { sender: this.props.id} }}> Chatlog </Link> 
  <br/>
  <br/>
  <Link 
        to={{ pathname: '/settings' }}> Settings </Link>
  <br/>
  <br/>
  <Link exact to="/projects">  Projects </Link>
  <br/>
  <br/>
</div>




            </div>
            
        )
    }
}
