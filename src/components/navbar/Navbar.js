import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends Component {
    
    render(){
        return(
            <div className='navbar'>
                <Link className='logo' to= '/'>
                    <h2 className='logoText'>CNC</h2>
                </Link>
                <div className='interactionContainer'>
                    <div className='linkBox'>
                        <Link className='navButton' to='/'>
                            <h2>Home</h2>
                        </Link>
                        <Link className='navButton' to='/create'>
                            <h2>Create</h2>
                        </Link>
                        <Link className='navButton' to='/weather'>
                            <h2>Weather</h2>
                        </Link>
                        <Link className='navButton' to='/'>
                        <h2>Sports</h2>
                        </Link>
                    </div>
                    <input className='fakeSearch' type='text' placeholder='search'/>
                </div>
            </div>
        )
    }
}