import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import {Link} from 'react-router-dom';
import '../App.css'
export default function Login() {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();

    const onEmailHandler = (e) =>{
        setName(e.currentTarget.value);
    }
    const onPasswordHandler = (e) =>{
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const user = {
            name:name,
            password:password
        }
        //console.log("user",user)
        axios.post('https://task-manager-tdcx.herokuapp.com/signin',user)
        
        .then(res=>{
            console.log(res)
           sessionStorage.setItem("jwt",res.data.token)
           localStorage.setItem('name',name);
         if(res.status===200){
           // props.history.push('/')
           
           history.push("/new")
            
         }   
         else{
             alert("login failed")
            // history.push("/");
         }

        })
        .catch(err=>{
            console.log(err)
        })
       
    }
   

    return (
        <div>
            
        <div className="form">
            <label htmlFor="">Login</label>
              <form onSubmit={onSubmitHandler}>
           
             <input type="text" placeholder="name" id="email" value={name} onChange={onEmailHandler}/>
           
             <input type="password" placeholder="password" id="password" value={password} onChange={onPasswordHandler}/>
           
             <button type="submit" >Login</button>
         
          
         </form>
         
        </div>
        </div>
    )
}
