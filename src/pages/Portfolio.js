import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className='cards-wrap'>
        <div className='card'>
          <Project1 />
        </div>
        <div className='card'>
          <Project2 />
        </div>
        <div className='card'>
          <Project3 />
        </div>
      </div>
    </div>
  )
}

export default Portfolio