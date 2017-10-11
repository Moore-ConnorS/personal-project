import React, { Component } from 'react';
import axios from 'axios'

import Navbar from './../navbar/Navbar'

export default class UpdateEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            readOneArticle: []
        }

        this.edit = this.edit.bind( this )
        this.grabArticle = this.grabArticle.bind( this )
    }

    grabArticle(){
        axios.get(`api/articles/${this.props.id}`).then(res => {
            this.setState({
                readOneArticle: res.data
            })
        })
    }
    
    edit(){
        axios.patch(`api/articles/${this.props.id}`).then(() => {
            this.props.grabArticle()
        }); 
    }



    render(){
      
        const article = this.state.readOneArticle.map((articles) => {
            return(
                <div key={ article.id}>
               <h2> {articles.title} </h2>
                </div>
            )
        })

        return( 
          
            <div>
                <Navbar />
                {article}
            </div>
               
        )
    }
}