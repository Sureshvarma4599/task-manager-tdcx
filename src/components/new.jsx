import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom';
import '../App.css'
export default function Login() {
    const [task,setTask]=useState("");
    
    const history = useHistory();

    const onTaskHandler = (e) =>{
        setTask(e.currentTarget.value);
    }
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const detail = {
            task:task
            
        }
        //console.log("user",user)
        axios.post('https://task-manager-tdcx.herokuapp.com/data',detail)
        
        .then(res=>{
            console.log(res)
            window.location.reload(false)
          
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
            
        <div className="taskform">
            
              <form onSubmit={onSubmitHandler}>
            <div className="cd">
             <input type="text" placeholder="task name" id="email" value={task} onChange={onTaskHandler}/>
             <button type="submit" >+ New Task</button>
             </div>
          
         </form>
         
        </div>
        </div>
    )
}
