import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Pop from './add'
import Header from './header'
import View from './view'

export default class Dashboard extends Component {
   
    render() {
        return (
            <div>
               <Header/>
                <Pop/>
                <View/>
            </div>
        )
    }
}
