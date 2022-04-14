import React from 'react'

const Slide = (props) => {
  return (
    <div className='slide'>
        <img src={props.slide.image} alt={props.slide.title} />
    </div>
  )
}

export default Slide