import React from "react"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
        <div className="container-fluid">
         <nav className="navbar navbar-light bg-light">
           <span className="navbar-brand mb-0 h1">Chidi Okoye's Giphy Search</span>
       </nav>
        </div>
    )
  }
}

export default Header
