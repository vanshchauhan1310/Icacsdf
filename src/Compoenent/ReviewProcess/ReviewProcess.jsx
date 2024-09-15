import React from 'react'
import './Review.css'
import workflow from '../ReviewProcess/workflow.jpeg'
const ReviewProcess = () => {
  return (
    <>

<div className="review-image-container">
        <img 
          src= {workflow}
          alt="Review Process" 
          className="review-image"
        />
      </div>

    </>
  )
}

export default ReviewProcess