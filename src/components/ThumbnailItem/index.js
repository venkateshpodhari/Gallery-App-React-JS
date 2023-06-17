// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {details, filteredList, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details

  const onChange = () => {
    filteredList(id)
  }
  const hide = isActive ? '' : 'img'

  return (
    <li className="li">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onChange}
          className={hide}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
