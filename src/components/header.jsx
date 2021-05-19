import React from 'react'
import { useHistory } from 'react-router-dom';
import Logo from '../assets/profile.png'
export default function Header() {
    const data = localStorage.getItem('name')
    const history = useHistory();

   const onLogoutHandler=(e)=>{
       console.log("working")
        sessionStorage.clear();
        history.push('/')
    }
    return (
        <div className="header">
          <div className="title">
              <img src={Logo} alt="" />
               <p>{data}</p>
               </div>
               <div><button  onClick={onLogoutHandler} style={{width:"100px",backgroundColor:"white",color:"gray",border:"2px solid white",padding:"20px"}}>Logout</button></div> 
            
        </div>
    )
}
