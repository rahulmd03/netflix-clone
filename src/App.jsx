import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import {actions,comedy,documentaries,horror,originals, romance, trending} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
import Footer from "./Components/Footer/Footer"

 


function App() {

  return (
    <>
      <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={trending} title='Trending' isSmall />
        <RowPost url={actions} title='Action' isSmall />
        <RowPost url={comedy} title='Comedy' isSmall />
        <RowPost url={horror} title='Horror' isSmall />
        <RowPost url={romance} title='Romantic' isSmall />
        <RowPost url={documentaries} title='Documentary' isSmall />
        <Footer/>
      </div>
    </>
  )
}

export default App
