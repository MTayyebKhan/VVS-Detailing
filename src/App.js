import React from 'react'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Warranty from './components/warranty/Warranty'
import Coating from './components/coating/Coating'
import Stories from './components/stories/Stories'
import './app.scss'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Services />
        <Warranty />
        <Coating />
        <Stories />
      </div>
    </div>
  )
}
