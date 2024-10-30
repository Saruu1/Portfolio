import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-heading">GET IN TOUCH</div>
      <div className="contact-subheading">Let's rock together</div>
      <div className="contact-container">
        <div className="contact-items">
          <img src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png" alt="" />
          <h3>Phone</h3>
          <p>8825003314</p>
        </div>
        <div className="contact-items">
        <img src="https://cdn-icons-png.flaticon.com/128/17717/17717699.png" alt="" />
          <h3>Email</h3>
          <p>Sarvarhussain949@gmail.com</p>
        </div>
        <div className="contact-items">
        <img src="https://cdn-icons-png.flaticon.com/128/17701/17701498.png" alt="" />
          <h3>Address</h3>
          <p>405, White Street, London, M1 1AE </p>
        </div>
        <div className="contact-items">
        <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
          <h3>Github</h3>
          <p>@Saruu1</p>
        </div>
        </div>
        <div className="contact-items"></div>
        <div className="contact-items"></div>
      </div>
  )}

export default Contact