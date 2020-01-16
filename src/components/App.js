
import React, { Component } from "react"
import GifList from "../components/GifList/GifList"
import GifModal from "../components/GifModal/GifModal"
import SearchBar from "../components/Searchbar/SearchBar"
import Header from "../components/Header/Header"
import request from "superagent"
import { GIPHY_API_KEY, GIPHY_BASE_URL, GIPHY_PARAMS } from "../helpers"

import "./App.css"

class App extends Component {
	constructor() {
		super()

		this.state = {
			gifs: [],
			selectedGif: null,
			modalIsOpen: false
		}
	}

	openModal(gif) {
		this.setState({
			modalIsOpen: true,
			selectedGif: gif
		})
	}

	closeModal() {
		this.setState({
			modalIsOpen: false
		})
	}

	handleTermChange = searchTerm => {
		const url = `${GIPHY_BASE_URL}api_key=${GIPHY_API_KEY}&q=${searchTerm.replace(
			/\s/g,
			"+"
		)}${GIPHY_PARAMS}`

		request.get(url, (err, res) => {
			this.setState({ gifs: res.body.data })
		})
	}

	render() {
		return (
			<div>
				<Header />
				<SearchBar onTermChange={this.handleTermChange} />
				<GifList
					gifs={this.state.gifs}
					onGifSelect={selectedGif => this.openModal(selectedGif)}
				/>
				<GifModal
					modalIsOpen={this.state.modalIsOpen}
					selectedGif={this.state.selectedGif}
					onRequestClose={() => this.closeModal()}
				/>
			</div>
		)
	}
}

export default App
