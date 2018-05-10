import React from 'react'
import './NavBar.css'
import '../assets/planet.png'

function NavBar(props){
    return(
        <nav className="row ContainerNav">
            <div className="col-12">
                <img src={require("../assets/planet.png")} alt="planet" />
                <h1>Party Planet - Build-a-Party</h1>
            </div>
        </nav>
    )
}

export default NavBar