import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './../navbar/Navbar';
import './Create.css'





export default class Create extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgurl: '',
            article: ''
        }
        
        this.handleChange = this.handleChange.bind( this );
        this.create = this.create.bind( this );

    }

    handleChange( property, val ){
        var newState = {}
        newState[property] = val;
        this.setState(newState)
    }

    create() {
        const { title, description, imgurl, article } = this.state;
        var newsArticle = {
            title,
            description,
            imgurl,
            article
        }
    
        axios.post('/api/articles', newsArticle)
    }

    render(){
        const { title, description, imgurl, article } = this.state;
        console.log(this.state)

        return(
            <div>
               <Navbar/>
               <div className='pageBox'>
                <div className='sidebar'></div>
                   <div className='inputField'>
                       <div className='pageTitle'>
                           Article Creator
                       </div>
                       <div className='title'>
                        Title:<br/>
                       </div>
                        <input className="titleInput" value={ title } onChange={ (e) => this.handleChange('title', e.target.value) }/>
                       <div className='title'>
                        <br/> Description: <br/>
                       </div>
                        <textarea className="descriptionInput" value={ description } onChange={ (e) => this.handleChange('description', e.target.value) }/>
                       <div className='title'>
                        <br/> Image URL: <br/>
                       </div>
                        <input className='imageInput' value={ imgurl } onChange={ (e) => this.handleChange('imgurl', e.target.value) }/>
                       <div className='title'>
                        <br/> Article: <br/>
                       </div>
                        <textarea className='articleInput' value={ article } onChange={ (e) => this.handleChange('article', e.target.value) }/>
                        <br/>
                       <div>
                        <Link to='/'>
                        <button className='createBtn' onClick={ this.create }> Create </button>
                        </Link>
                       </div>
                   </div>
                <div className='sidebar'></div>
               </div>
            </div>
        )
    }
}
    