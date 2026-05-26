import './css/NewsCard.css'

function NewsCard({ title, subtitle, image }) {
  return (
    <div className='news-card'>

      <div className='news-content'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default NewsCard