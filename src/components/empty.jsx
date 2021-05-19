import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import Add from './add'
import '../App.css'
import Head from './header'
 class Empty extends Component {
    constructor(){
        super();
        this.state={
           
            datas:[],
           
            reload:false
            
           
        }
        }
        
        componentDidMount(){
            axios.get("https://task-manager-tdcx.herokuapp.com/data/")
            .then(res=>{
                console.log(res.data)
                this.setState({datas:res.data})
                if(this.state.datas.length>=1){
                    console.log("not empty")
                    this.props.history.push('/dashboard')
                }

                
            })
            .catch(err=>{
                console.log(err)
            })
        }

    render() {
        return (
            <React.Fragment>
            <Head/>
            <div className="empty">
                <h2>You have no Task</h2>
                <Add/>
            </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Empty);
