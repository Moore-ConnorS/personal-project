import React, { Component } from 'react'
import axios from 'axios'





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
                {/* {router} */}
                {/* <Link to='/create'></Link> */}
                <input value={ title } onChange={ (e) => this.handleChange('title', e.target.value) }/>
                <input value={ description } onChange={ (e) => this.handleChange('description', e.target.value) }/>
                <input value={ imgurl } onChange={ (e) => this.handleChange('imgurl', e.target.value) }/>
                <input value={ article } onChange={ (e) => this.handleChange('article', e.target.value) }/>
                <button onClick={ this.create }> Create </button>
            </div>
        )
    }
}
    