// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="website-logo"
      />
      <div className="page-container">
        <div className="movies-container">
          <MovieSlider moviesList={moviesList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
