import React,{Component} from 'react'


class Pagination extends Component{
    state={
  isEditable:false
    }

    render(){
       const {next,prev,isNext,isPrevious,totalPage,currentPage,handleChangePage,goToPage}=this.props
        return(
         <div className='d-flex my-5 align-item-center'>
           <button className='btn btn-info' disabled={!isPrevious} onClick={()=>{prev()}}>Prev</button>
           <div className='flex-grow-1 text-center'>
              {this.state.isEditable?(
                 <input type='number' value={currentPage} onChange={e=>{handleChangePage(e.target.value)}} 
                    onKeyPress={(e)=>{
                       if(e.key==='Enter'){
                          goToPage()
                          this.setState({isEditable:false})
                       }
                    }}
                 />
              ):(
                 <p style={{userSelect:'none',lineHeight:'1.1'}} title='Double click to jump page' onDoubleClick={()=>{this.setState({isEditable:!this.state.isEditable})}}> {currentPage} of {totalPage}
                 <br/>
                 <small>Double click to edit</small>
                 </p>
              )}
           </div>
           <button className='btn  btn-info ml-auto' disabled={!isNext} onClick={()=>{next()}}>Next</button>
         </div>
        )
    }
}

export default Pagination