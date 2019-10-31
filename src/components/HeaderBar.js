import React, { Component } from 'react'

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
           
              <a href="#" className="openButton" onClick={this.openNav}>&#9776;codecanyon</a>
     

<div id="main">

  

</div>
                    
                
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
</nav>   



<div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
  <a href="#"> <img className="icon" src={this.props.picture} alt={this.props.name} />   <br></br>  {this.props.name}
 </a>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>

  <a href="#">Services</a>
  <br/>
  <br/>
  <a href="#">Clients</a>
  <br/>
  <br/>
  <a href="#">Contact</a>
  <br/>
  <br/>
</div>




            </div>
            
        )
    }
}
