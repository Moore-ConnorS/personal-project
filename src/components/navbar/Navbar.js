import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends Component {
    
    render(){
        return(
            <div className='navbar'>
            <Link className='navButton' to= '/'>
            <h2>CNC</h2>
            </Link>
            <Link className='navButton' to='/create'>
            <h2>Create</h2>
            </Link>
            <Link className='navButton' to='/weather'>
            <h2>Weather</h2>
            </Link>
            </div>
        )
    }
}