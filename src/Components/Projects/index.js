import React from 'react';
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <div className="pHeading">MY PROJECTS</div>
      <div className="projectlist">
        <div className="project-card">
          <img src="https://converteonline.com/img/word-counter.webp" alt="" className="project-image" />
          <h2 className="project-title">Word Counter</h2>
          <p className="project-description">WordCounter is a react app which can be used for text manipulation. We can use it to count the words in a paragraph, convert the text to uppercase, lowercase, we can remove extra spaces from a paragraph, copy text, clear text. It has a functionality of Dark Mode and Light Mode too.</p>
        </div>
        <div className="project-card">
          <img src="https://www.insightssuccess.in/wp-content/uploads/2021/03/CRED.jpg" alt="" className="project-image" />
          <h2 className="project-title">CRED Clone</h2>
          <p className="project-description">Its a clone app of CRED, an indian finetech company, made using ReactJs consisting the intersection observer API with responsive design.</p>
        </div>
        <div className="project-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00RJY9FVMUIi4L-hKGD6ae7x1wmdx__wt_A&s" alt="" className="project-image" />
          <h2 className="project-title">News Ocean</h2>
          <p className="project-description">The news app made with React Js where you can read the latest news be that related to Cricket, Technology and many more.</p>
        </div>
        <div className="project-card">
          <img src="https://img.freepik.com/premium-vector/black-white-logo-with-pen-pen_980072-746.jpg?semt=ais_hybrid" alt="" className="project-image" />
          <h2 className="project-title">iNotebook</h2>
          <p className="project-description">iNotebook is a react app which can be used to store notes of a user on the cloud and the user can access them after logging in with his unique credentials. The user needs to signup first, only after that he can have access to add notes, delete notes and even edit notes.</p>
        </div>
        <div className="project-card">
          <img src="https://ashutosh.dev/content/images/2022/02/CurrencyConverter.png" alt="" className="project-image" />
          <h2 className="project-title">Currency Converter</h2>
          <p className="project-description">This is a simple currency converter application built using HTML, CSS, and JavaScript. The application allows users to convert between different currencies based on the latest exchange rates. Users can enter an amount in one currency and select another currency to see the equivalent amount. The exchange rates are fetched from the ExchangeRate-API.</p>
        </div>
        <div className="project-card">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/012/616/128/small/rock-paper-scissors-icon-set-on-white-background-vector.jpg" alt="" className="project-image" />
          <h2 className="project-title">Rock Paper Scissor</h2>
          <p className="project-description">This is a simple implementation of the classic Rock, Paper, Scissors game using HTML, CSS, and JavaScript. The game allows the player to select one of the three options (Rock, Paper, or Scissors) and then randomly selects an option for the computer. The winner is determined based on the rules: Rock beats Scissors, Scissors beats Paper and so on.</p>
        </div>
        {/* <ul>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S0nUs0rTvbe_T89NmDXmltJeVw6MQ377ow&s" alt="non" /></li>
          <li><img src="lustration-floor-graphy-nature-spring-field-landscape-child-retail-thumbnail.pnghttps://e7.pngegg.com/pngimages/476/61/png-clipart-house-beside-river-il" alt="non" /></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54MP6YawOg9a5h2E7V2moi_MXU6HJ87L48Q&s" alt="non" /></li>
          <li><img src="https://i.pinimg.com/originals/8c/f4/25/8cf42590e595670db04ef263823ef021.jpg" alt="non" /></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJ5SmyyNCj2_WcldgXPTjpyu80Xw2JHQHMw&s" alt="non" /></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8EfApVfb5DKM6_yC_miZxqTI-JazWro5aw&s" alt="non" /></li>
          </ul> */}
      </div>
    </div>
  )
}

export default Projects