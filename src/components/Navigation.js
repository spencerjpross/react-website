import React from 'react'

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/portfolio" className="site-title">Portfolio</a>
      <ul>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation