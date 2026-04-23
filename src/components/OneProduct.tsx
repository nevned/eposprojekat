import React from 'react'

const OneProduct = () => {

    const stil = {
        margin:10,
        borderStyle: 'dashed'
    }

  return (
    // border-style: solid; 
    // <div className='card' style={{margin:10, borderStyle: 'solid'}}>
    <div className='card' style={stil}>
        <img className='card-img-top' src="https://picsum.photos/200" alt="Slika proizvoda" />
        <div className='card-body'>
            <h3 className='card-title'>Product name</h3>
            <p className='card-text'>Product description ...</p>
            <a className='btn' href="">+</a>
            <a href="" className='btn'>-</a>
        </div>
    </div>
  )
}

export default OneProduct