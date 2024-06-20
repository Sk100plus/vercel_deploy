import React, {} from 'react'
// import {Link} from "react-router-dom";
// **********Class based component*********
// export class NavBar extends Component {
  // ********function based component*******
  const NavBar =()=>{
    return (
      <>
      <div> 
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
 <img className='logo' src="https://th.bing.com/th/id/OIP.FS0u27Y43NE-cP7DctIU6gHaHa?w=900&h=900&rs=1&pid=ImgDetMain" alt="" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
    <li className="nav-item active">
        <a className="nav-link" href="/NEWS_APP">Home</a>
      </li> 
       <li className="nav-item ">
        <a className="nav-link" href="/NEWS_APP/news">General </a>
      </li> 
     
     

      <li className="nav-item" >
        <a className="nav-link" href="/NEWS_APP/business">Business</a>

      </li>   
        <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/health">Health</a>
      </li>    
       <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/science">Science</a>
      </li>   
        <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/technology">Technology</a>
      </li>
    </ul>
   </div>
</nav>
      </div>
     
      </>
      
    )
  }


export default NavBar;
