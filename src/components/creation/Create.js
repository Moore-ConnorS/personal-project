import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';





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
                <Link to='/'>
                Back to Home
                </Link><br/>
                Title:<br/>
                <input value={ title } onChange={ (e) => this.handleChange('title', e.target.value) }/>
                <br/> Description: <br/>
                <input value={ description } onChange={ (e) => this.handleChange('description', e.target.value) }/>
                <br/> Image URL: <br/>
                <input value={ imgurl } onChange={ (e) => this.handleChange('imgurl', e.target.value) }/>
                <br/> Article: <br/>
                <input value={ article } onChange={ (e) => this.handleChange('article', e.target.value) }/>
                <br/>
                <Link to='/'>
                <button onClick={ this.create }> Create </button>
                </Link>
            </div>
        )
    }
}
    