import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Navbar from './../navbar/Navbar'
import Updater from './Updater'

export default class UpdateEdit extends Component {
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
                
                <Updater key={ article.id } article={article} />
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