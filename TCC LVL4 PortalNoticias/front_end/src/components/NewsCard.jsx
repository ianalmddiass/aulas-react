import React from 'react'
import '../css/newsCard.css'

function NewsCard(props) {
  return (
    <div className='news-card'>

      <div className='news-content'>
        <h2>{props.title}</h2>
        <p>
          {props.subtitle}
        </p>
      </div>
    </div>
  )
}

export default NewsCard