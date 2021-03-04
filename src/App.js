
import './App.css';
import React from 'react'
import Headers from './components/Headers.jsx'
import News, {newsCategory} from './news'
import NewsList from './components/NewsList.jsx'
import Pagination from './components/pagination.jsx'
import Result from './components/result.jsx'
import Loading from './components/loading.jsx'




const news=new News(newsCategory.technology)
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
  next=()=>{
    if(this.state.data.isNext){
      this.setState({isLoading:true})
    }
    news.next()
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something went wrong')
      this.setState({isLoading:false})
    })
  }



  prev=()=>{
    if(this.state.data.isPrevious){
      this.setState({isLoading:true})
    }
    news.prev()
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something went wrong')
      this.setState({isLoading:false})
    })
  }

  handleChangePage=(value)=>{
        this.setState({
          data:{
            ...this.state.data,
            currentPage:Number.parseInt(value)
          }
        })
  }

  goToPage=()=>{
    this.setState({isLoading:true})
    news.setCurrentPage(this.state.data.currentPage)
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      alert('something went wrong')
      this.setState({isLoading:false})
    })
  }

  changeCategory=(category)=>{
    this.setState({isLoading:true})
    news.changeCategory(category)
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      alert('something went wrong')
      this.setState({isLoading:false})
    })
  }


  search=(searchTerm)=>{
    this.setState({isLoading:true})
    news.search(searchTerm)
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      alert('something went wrong')
      this.setState({isLoading:false})
    })
  }

  
 render(){
   const {
    article,
    isNext,
    isPrevious,
    totalPage,
    currentPage,
    category,
    totalResults,
   }=this.state.data


  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-md-2'>
           <Headers category={category} changeCategory={this.changeCategory} search={this.search}/>
           <Result totalResults={totalResults} currentPage={currentPage} totalPage={totalPage} />
           {this.state.isLoading?(
            <Loading/>
           ):(
               <div>
               <NewsList news={this.state.data.article} />
                <Pagination next={this.next} prev={this.prev} isPrevious={isPrevious} isNext={isNext} totalPage={totalPage} currentPage={currentPage}  handleChangePage={this.handleChangePage} goToPage={this.goToPage}/>
               </div>
           )}
        </div>
      </div>
    </div>
   )
 }
}

export default App;
