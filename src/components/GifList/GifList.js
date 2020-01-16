// @flow
import React from "react"
import GifItem from "../GifItem/GifItem"

import "./GifList.css"

const GifList = props => {
	const gifItems = props.gifs.map(image => {
		return (
			<GifItem
				key={image.id}
				gif={image}
				onGifSelect={props.onGifSelect}
			/>
		)
	})

	return <div className=" card-grid">{gifItems}</div>
}

export default GifList
