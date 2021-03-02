
import './App.css';
import React from 'react'
import Headers from './components/Headers.jsx'
import {newsCategory} from './news'
import NewsList from './components/NewsList.jsx'
import Pagination from './components/pagination.jsx'
import Result from './components/result.jsx'
import Loading from './components/loading.jsx'
import axios from 'axios'




class App extends React.Component {
  state={
     news:[]
  }


  componentDidMount(){
       const url=`${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=technology`
       axios.get(url)
       .then(response=>{
         this.setState({news:response.data.articles})
       })
       .catch(e=>{
         console.log(e);
       })
  }



 render(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8 offset-md-1'>
           <Headers category={newsCategory.technology}/>
           <Result/>
           <NewsList news={this.state.news} />
           <Pagination/>
           <Loading/>
         
        </div>
      </div>
    </div>
   )
 }
}

export default App;
