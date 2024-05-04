// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, onClickThumbnailImg, activeClass} = props
  const {imageUrl, thumbnailAltText, id} = eachImageDetails
  const onClickFunc = () => {
    onClickThumbnailImg(id)
  }
  const isActiveClass = activeClass ? 'activeClassItem' : ''
  return (
    <li>
      <button onClick={onClickFunc}>
        <img
          src={`${imageUrl}`}
          alt={`${thumbnailAltText}`}
          className={`img ${isActiveClass}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
