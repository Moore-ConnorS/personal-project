import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Updater extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.article.title,
            description: this.props.article.description,
            imgurl: this.props.article.imgurl,
            article: this.props.article.article
        }

        this.edit = this.edit.bind( this )
        this.handleChange = this.handleChange.bind( this )
    }

    
    handleChange( property, val ){
        var newState = {}
        newState[property] = val;
        this.setState(newState)
    }

    edit(){

        axios.patch(`api/articles/${this.props.article.id}`, this.state)  
    }

    render(){
        return(
            <div className='pageBox'>
                <div className='sidebar'></div>
                   <div className='inputField'>
                       <div className='pageTitle'>
                           Article Editor
                       </div>
                       <div className='title'>
                        Title:<br/>
                       </div>
                        <input className="titleInput" value={ this.state.title } onChange={ (e) => this.handleChange('title', e.target.value) }/>
                       <div className='title'>
                        <br/> Description: <br/>
                       </div>
                        <textarea className="descriptionInput" value={ this.state.description } onChange={ (e) => this.handleChange('description', e.target.value) }/>
                       <div className='title'>
                        <br/> Image URL: <br/>
                       </div>
                        <input className='imageInput' value={ this.state.imgurl } onChange={ (e) => this.handleChange('imgurl', e.target.value) }/>
                       <div className='title'>
                        <br/> Article: <br/>
                       </div>
                        <textarea className='articleInput' value={ this.state.article } onChange={ (e) => this.handleChange('article', e.target.value) }/>
                        <br/>
                       <div>
                        <Link to='/'>
                        <button className='editBtn' onClick={ this.edit }> Edit </button>
                        </Link>
                       </div>
                   </div>
                <div className='sidebar'></div>
               </div>
        )
    }

} 

// Updater.defaultProps = {
//     article: {
//         title: 'loading...',
//         description: 'loading...',
//         imgurl: 'loading...',
//         article: 'loading...'
//     }
// }