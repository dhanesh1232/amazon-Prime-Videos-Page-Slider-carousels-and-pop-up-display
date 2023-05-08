// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

class MovieSlider extends Component {
  settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  render() {
    const {moviesList} = this.props
    const actionMovie = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

    return (
      <>
        <h1>Action Movies</h1>
        <Slider height={400} {...this.settings}>
          {actionMovie.map(eachMovie => (
            <MovieItem movieItem={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
        <h1>Comedy Movies</h1>
        <Slider height={400} {...this.settings}>
          {comedyMovies.map(eachMovie => (
            <MovieItem movieItem={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </>
    )
  }
}
export default MovieSlider
