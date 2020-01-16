// @flow
import React from "react"

import "./GifItem.css"

const GifItem = ({ gif, onGifSelect }) => {
	return (
		<div className="card-wrap" onClick={() => onGifSelect(gif)}>
			<img src={gif.images.downsized.url} alt="" />
		</div>
	)
}

export default GifItem
