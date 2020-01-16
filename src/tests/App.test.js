import React from "react"
import ReactDOM from "react-dom"
import { shallow } from "enzyme"
import App from "../components/App"
import GifItem from "../components/GifItem"
import GifList from "../components/GifList"
import SearchBar from "../components/SearchBar"
import GifModal from "../components/GifModal"

describe("App component tests", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div")
		ReactDOM.render(<App />, div)
	})
	it("should check that all components render correctly", () => {
		// should check that components render as required
	})

	it("should check that methods fire correctly", () => {
		// are methods firing properly?
	})
})
