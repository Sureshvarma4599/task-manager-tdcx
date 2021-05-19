import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Link,useLocation} from 'react-router-dom';
import '../App.css'
export default function Update() {
    const [task,setTask]=useState("");
    const location=useLocation()
    const history = useHistory();

    const onTaskHandler = (e) =>{
        setTask(e.currentTarget.value);
    }
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const data = {
            task:task
            
        }
        //console.log("user",user)
        const id = location.state.detail
        const token = sessionStorage.getItem('jwt')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        axios.put(`https://task-manager-tdcx.herokuapp.com/data/${id}`,data,config)
        
        .then(res=>{
            console.log(res)
           history.push('/dashboard')
          
         if(res.status===200){
           // props.history.push('/')
          
            alert("success")
         }   
         else{
             alert("task failed")
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
            
              <form onSubmit={onSubmitHandler}>
           
             <input type="text" placeholder="task name" id="email" value={task} onChange={onTaskHandler}/>
           
             
           
             <button type="submit" >+ Update Task</button>
         
          
         </form>
         
        </div>
        </div>
    )
}
