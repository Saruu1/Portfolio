import React from 'react'
import './homepage.css';
const HomePage = (props) => {
  return (
    <>
    <div className="container">
        <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="non"  />
        <div className="description"><p>Hello, I am</p></div>
          <div className="main">
          Sarvar Hussain
          </div>
          <div className="bdescription"><p>Front End Developer</p></div>
    </div>
          <div className="intro">
            <p>Welcome! Glad to see you here! I am excited to tell you about myself, dive into the portfolio to know me, Thank You!</p>
          </div>
    </>
  )
}
export default HomePage