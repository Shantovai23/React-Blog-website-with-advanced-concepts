import React,{Component} from 'react'


class Pagination extends Component{
    state={
  isEditable:false
    }

    render(){
        return(
         <div className='d-flex my-5 align-item-center'>
           <button className='btn btn-info'>Prev</button>
           <div className='flex-grow-1 text-center'>
              {this.state.isEditable?(
                 <input type='number' value='1'/>
              ):(
                 <p style={{userSelect:'none',lineHeight:'1.1'}} title='Double click to jump page' onDoubleClick={()=>{this.setState({isEditable:!this.state.isEditable})}}> {1} of {100}
                 <br/>
                 <small>Double click to edit</small>
                 </p>
              )}
           </div>
           <button className='btn  btn-info ml-auto'>Next</button>
         </div>
        )
    }
}

export default Pagination