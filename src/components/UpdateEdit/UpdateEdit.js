import React, { Component } from 'react';
import axios from 'axios'


import Navbar from './../navbar/Navbar'
import UpdaterInput from './UpdaterInput'

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
                
                <UpdaterInput key={ article.id } article={article} />
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