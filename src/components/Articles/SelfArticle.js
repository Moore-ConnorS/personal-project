import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './../navbar/Navbar'


export default class BBCArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            readOneArticle: []
        }

    }

    componentDidMount(){
        
        axios.get(`api/articles/${this.props.match.params.id}`).then(res => {
            this.setState({
                readOneArticle: res.data
            })
        })
    }


    render(){

        const article = this.state.readOneArticle.map((article) => {
            return(
                <div>
                <h1>{article.title}</h1>
                <h3>{article.description}</h3>
                <img src={article.imgurl}/>
                <p>{article.article}</p>
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