
import React, { Component } from 'react'
import Login from './login'
import { useHistory } from 'react-router-dom';
export default function Landing() {
    const history = useHistory();

    if (sessionStorage.getItem("jwt")!==null) {
        
        history.push("/dashboard");
    }
    else {
        console.log("no");
    }
    return (
        <React.Fragment>
            <Login/>
        </React.Fragment>
    )
}

