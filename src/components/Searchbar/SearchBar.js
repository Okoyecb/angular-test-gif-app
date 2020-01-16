import React from "react"
import "./SearchBar.css"


class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = { searchTerm: "" }
    }

    onInputChange(searchTerm) {
        this.setState({ searchTerm })
        this.props.onTermChange(searchTerm)
    }

    render() {
        return (
            <div className="search">
             <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input className="form-control form-control-lg" placeholder="Search all Gif's" onChange={event => this.onInputChange(event.target.value)} />
                </div>
                 <button className="btn btn-success mb-2">Search</button>
            </form>
        </div>
        )
    }
}

export default SearchBar
