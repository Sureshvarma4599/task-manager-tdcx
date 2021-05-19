import React, { Component } from 'react'
import axios from 'axios'
import Pen from '../assets/edit.png'
import Del from '../assets/delete.png'
import Skeleton from 'react-loading-skeleton';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link,withRouter} from 'react-router-dom'
 class View extends Component {
    constructor(){
        super();
        this.state={
            keys:"",
            datas:[],
            count:0,
            color:"",
            reload:false
            
           
        }
        }
        
        componentDidMount(){
            axios.get("https://task-manager-tdcx.herokuapp.com/data/")
            .then(res=>{
                console.log(res.data)
                this.setState({datas:res.data})
                if(this.state.datas.length<1){
                    this.history.push('/new')
                }

                
            })
            .catch(err=>{
                console.log(err)
            })
        }
        onUpdateHandler=(id)=>{
            
          
            this.props.history.push({pathname:"/update",
            state: { detail: id }
        })
        }
        onCheckHandler=(id)=>{
         let data = this.state.datas
         let com = this.state.datas.completed
         
         data.forEach(el=>{
             if(el._id===id){
                 el.completed=!el.completed
                 console.log("done")
                 this.setState({com:!com})
                 if(el.completed===true){
                     
                     this.setState({count:this.state.count+1})
                     this.setState({color:"gray"})
                     
                 }
                 if(el.completed===false){
                    this.setState({count:this.state.count-1})
                 }
                 console.log(this.state.datas)
             }
         })
        
        
        }
        
          
        onSearchHandler=(e)=>{
            this.setState({keys:e.target.value})
        }
        onChangeHandler=(e)=>{
           
          const filtered = this.state.datas.filter(d=>d.task.substring(0,3)===this.state.keys.substring(0,3))
          console.log(filtered)
          this.setState({datas:filtered})
        }
        onDeleteHandler=(id)=>{
           axios.delete("https://task-manager-tdcx.herokuapp.com/data/"+id)
           .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
        }
    render() {
        return (
            <React.Fragment>
                <div className="cards">
                <div className="card1">
                 
                    <h2>Tasks Completed</h2>
                    <h1 >{this.state.count}/{this.state.datas.length}</h1>
                </div>

                <div className="card2">
                   <h2>Latest created tasks</h2>
                   <div>
                   {this.state.datas.length>0 && this.state.datas.reverse().slice(0,3).map(data=>(
                       <p style={{width:"80%",marginLeft:"10px"}}> <li>{data.task}</li></p>
                    ) )}
                   </div>
                </div>
                <div className="card4">
                    <h2>Completed Tasks</h2>
                <div className="card3">
                     <CircularProgressbar  value={this.state.count/this.state.datas.length*100} text={`${Math.round((this.state.count/this.state.datas.length)*100)}%`} />
                </div>
                </div>
                </div>
            <div className="search">
            <input type="text" class="mainLoginInput" placeholder="&#61442; Search by task" onChange={this.onSearchHandler}/>
            <button style={{width:"60px",backgroundColor:"green",margin:"2%"}} onClick={this.onChangeHandler}>search</button>
            </div>
               
                  
            {this.state.datas.length>0 && this.state.datas.reverse().map(data=>(
           <span key={data.id}>
               <div className="datas">
             <input type="checkbox" onChange={()=>{this.onCheckHandler(data._id)}} style={{width:"15%",backgroundColor:"white",marginLeft:"5px",color:"gray",border:"2px solid white"}} />
            <p>{data.task}</p>
                 <img src={Pen} alt=""  onClick={()=>{this.onUpdateHandler(data._id)}}/>
                 <img src={Del} alt="" onClick={()=>{this.onDeleteHandler(data._id)}}/>
                
                  </div>
              
          
         
           </span>
            ))}
            
            
        </React.Fragment>
        )
    }
}
export default withRouter(View);
