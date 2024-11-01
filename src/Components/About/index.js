import React from 'react'
import "./about.css";
const About = () => {
  // const viewResume = () =>{

  // }
  return (
    <>
    <div className="about">
      <div className="heading">ABOUT ME</div>
      <div className="aboutdescription">Hello! I’m Sarvar Hussain, a passionate front-end developer dedicated to crafting beautiful and efficient web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly interfaces that enhance the overall user experience.</div>
      <div className="skills">SKILLS</div>
      <div className="skillList">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React Js</li>
          <li>Bootstrap</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="images">
        <div className='left'>
        <img src="https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png" alt="" />
        <img src="https://e7.pngegg.com/pngimages/603/759/png-clipart-css3-cascading-style-sheets-logo-html-world-wide-web-blue-angle-thumbnail.png" alt="" />
        <img src="https://e7.pngegg.com/pngimages/640/199/png-clipart-javascript-logo-html-javascript-logo-angle-text-thumbnail.png" alt="" /></div>
        <div className="right">
          <img src="https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png" alt="" />
          <img src="https://e7.pngegg.com/pngimages/162/309/png-clipart-bootstrap-responsive-web-design-web-development-logo-django-others-miscellaneous-purple-thumbnail.png" alt="" />
          <img src="https://e7.pngegg.com/pngimages/63/19/png-clipart-mongodb-database-nosql-postgresql-mongo-text-logo-thumbnail.png" alt="" />
          </div>
      </div>
      </div>
      </>
  )
}

export default About