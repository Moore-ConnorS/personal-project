import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Home.css';
import Navbar from './../navbar/Navbar';
import Delete from './../Delete/Delete';
import Weather from './../weather/Weather';




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
        const articles = this.state.readArticles.map((article) => {
          return (
            <div className='articleContainer' key ={ article.id }>
        <Link to={`/articles/${article.id}`}>
              <img className='customArticleImg'src={article.imgurl}/>
              <div>
                <h2>
                {article.title}
                </h2>
              </div>
              <p>{article.description}</p>
          </Link>
              <Delete fetchArticles={ this.fetchArticles } id={ article.id }/>
              <Link to={`/edit/${article.id}`}>
              <button>Edit</button>
              </Link>
            </div>
    
    
    
        )
      })
    
      const liveNews = this.state.bbcnews.map((news, i) => {
        return (
          <div key={i}>
            <div className='articleContainer'>
              <a href={news.url}>
              <img className="apiBackground" src={news.urlToImage} alt={news.description}/> 
              <div>
                <h2>{news.title}</h2>
                <p>{news.description}</p>
              </div>
              </a>
            </div>    
          </div>
        )
      })
      return (
        <div>
          <Navbar />
          <div className='bbcContainer'>
            {liveNews}
          </div>
          <Weather />
          <div className='customContainer'>
            {articles}
          </div>
        </div>
        
      )
    
    }
    }