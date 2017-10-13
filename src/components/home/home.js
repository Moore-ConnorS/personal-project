import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Home.css';
import Navbar from './../navbar/Navbar';
import Delete from './../Delete/Delete';



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
            <div key ={ article.id }>
              <div>
                <h2>
                {article.title}
                </h2>
              </div>
              <img src={article.imgurl}/>
              <p>{article.description}</p>
              <Delete fetchArticles={ this.fetchArticles } id={ article.id }/>
              <Link to={`/edit/${article.id}`}>
              <button>Edit</button>
              </Link>
    
    
    
            </div>
        )
      })
    
      const liveNews = this.state.bbcnews.map((news, i) => {
        return (
          <div className='bbcContainer' key={i}>
            <div>
              <img className="apiBackground" src={news.urlToImage}/> 
              <div>
                <h2>
                  {news.title}
                </h2>
                <p>{news.description}</p>
              </div>
            </div>
              
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