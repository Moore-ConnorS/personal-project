import React, { Component } from 'react';
import axios from 'axios'

import Navbar from './../navbar/Navbar';
import Delete from './../Delete/Delete'


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          readArticles: [],
          bbcnews: []
        }

        this.fetchArticles = this.fetchArticles.bind(this)
      }

      fetchArticles(){
        axios.get('/api/articles').then( res => {
            this.setState({
              readArticles:res.data
            })
          })  
      }
     
      
      componentDidMount() {

        this.fetchArticles()

        
        axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=8763d79006ca46f59fd7f391a8ada86a')
          .then(res => {
            this.setState({
            bbcnews: res.data.articles
          })
        })
      }
      
      render() {
        console.log(this.state.readArticles)
        const articles = this.state.readArticles.map((article) => {
          console.log(article)
        return (
            <div key ={ article.id }>
              <h2>
              {article.title}
              </h2>
              <img src={article.imgurl}/>
              <p>{article.description}</p>
              <Delete fetchArticles={ this.fetchArticles } id={ article.id }/>
    
    
    
            </div>
        )
      })
    
      const liveNews = this.state.bbcnews.map(function(news){
        return (
          <div key={news.id}>
            <h2>
              {news.title}
            </h2>
            <img src={news.urlToImage}/>
            <p>{news.description}</p>
          </div>
        )
      })
      return (
        <div>
          <Navbar />
          {liveNews}
          {articles}
        </div>
        
      )
    
    }
    }