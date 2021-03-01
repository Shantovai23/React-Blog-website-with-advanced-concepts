
import './App.css';
import React from 'react'
import Headers from './components/Headers.jsx'
import {newsCategory} from './news'
import NewsList from './components/NewsList.jsx'



const fakeNews=[
  {
    title:'Title',
    content:'Content',
    url:'https://linktoumage.com',
    urlToImage :'https://linktoumage.com',
    publishDate:'publish date and time',
    source:{
      name:'CNN'
    }
  },
  {
    title:'Title',
    content:'Content',
    url:'https://linktoumage.com',
    urlToImage :'https://linktoumage.com',
    publishDate:'publish date and time',
    source:{
      name:'CNN'
    }
  }
]


class App extends React.Component {
 render(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8 offset-md-1'>
           <Headers category={newsCategory.technology}/>
           <NewsList news={fakeNews} />
         
        </div>
      </div>
    </div>
   )
 }
}

export default App;
