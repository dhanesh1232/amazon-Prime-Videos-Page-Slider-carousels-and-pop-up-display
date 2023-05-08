// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem
  return (
    <>
      <Popup
        modal
        trigger={
          <button type="button" className="thumb-button">
            <img
              src={thumbnailUrl}
              alt={`thumbnail ${thumbnailUrl}`}
              className="thumb-image"
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="video-page">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="20" color="#000000" />
            </button>
            <div className="video">
              <ReactPlayer url={videoUrl} width="85%" />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}
export default MovieItem
