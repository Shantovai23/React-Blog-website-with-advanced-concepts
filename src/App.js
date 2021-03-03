
import './App.css';
import React from 'react'
import Headers from './components/Headers.jsx'
import News, {newsCategory} from './news'
import NewsList from './components/NewsList.jsx'
import Pagination from './components/pagination.jsx'
import Result from './components/result.jsx'
import Loading from './components/loading.jsx'




const news=new News(newsCategory.sports)
class App extends React.Component {
  state={
     data:{},
     isLoading:true
  }

  

  componentDidMount(){
      news.getNews()
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
        console.log(e);
        alert('something went Wrong')
        this.setState({isLoading:false})
      })
      
  }

  
 render(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8 offset-md-1'>
           <Headers category={this.state.category} changeCategory={this.changeCategory}/>
           <Result/>
           {this.state.isLoading?(
            <Loading/>
           ):(
            <NewsList news={this.state.data.article} />
           )}
           <Pagination/>
         
         
        </div>
      </div>
    </div>
   )
 }
}

export default App;
