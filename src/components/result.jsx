import React from 'react'

const Result=({totalResults,currentPage,totalPage})=>{
  
    return(
        <div className='d-flex'>
            <p className='text-black-50'>About {totalResults} results found</p>
            <p className='text-black-50 ml-auto'> {currentPage} page of {totalPage} </p>
        </div>
    )
}
export default Result