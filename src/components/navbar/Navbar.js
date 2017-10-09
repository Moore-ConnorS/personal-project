import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends Component {
    
    render(){
        return(
            <div className='navbar'>
            <ul>
            <li>
            <Link to= '/'>
            <h2>CNC</h2>
            </Link>
            </li>
            <li>
            <Link to='/create'>
            <h2>Create</h2>
            </Link>
            </li>
            <li>
            <Link to='/weather'>
            <h2>Weather</h2>
            </Link>
            </li>
            </ul>
            </div>
        )
    }
}