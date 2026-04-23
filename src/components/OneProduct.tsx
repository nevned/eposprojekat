import React from 'react'

const OneProduct = () => {
  return (
    <div className='card'>
        <img className='card-img-top' src="" alt="Slika proizvoda" />
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