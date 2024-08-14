import React from 'react'
import {sculptureList} from './data/data'
import GalleryApp from './components/GalleryApp'

const App = () => {

  return (
   <main>
    <h1> Galería de Arte</h1>
    <section>
    <GalleryApp esculturas={sculptureList}/>
    </section>


    </main>
  )
}

export default App