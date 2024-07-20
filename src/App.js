import React from "react";
import "./App.css";
import './Styles/Type.css';
import Menu from "./Components/Menu";
import Landing from "./Components/Landing";
import Title from "./Components/Title";
import Video from "./Components/Video";
import About from "./Components/About";
import TeamCard from "./Components/TeamCard";
import ButtonTop from "./Components/ButtonTop";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App" id="start">
      <Menu />
      <ButtonTop/>
      <div className="block">
        <Landing/>
      </div>
      <div className="block" id="trailer">
        <Video/>
      </div>
      <div className="block" id="about">
        <Title text="Present and Future" />
        <About />
      </div>
      <div className="block" id="team">
        <Title text="Who made this?" />
        <TeamCard
          name="Ksenia Anokhina"
          roles={["Developer", "Designer", "Project Manager"]}
          description="I am a Developer specializing in Vue.js and React, leveraging these frameworks to craft intuitive frontend solutions. Passionate about data visualization and recognized as a creative technologist, I thrive on designing user-centered structures that enhance overall user experiences. My academic foundation in 'Art, Design and Technology' and ‘Interactive Digital Media’ broadens my perspective within the broader multidisciplinary realm of digital art and media."
        />
        <TeamCard
          name="Ksenia Anokhina"
          roles={["Developer", "Designer"]}
          description="I am a Developer specializing in Vue.js and React, leveraging these frameworks to craft intuitive frontend solutions. Passionate about data visualization and recognized as a creative technologist, I thrive on designing user-centered structures that enhance overall user experiences. My academic foundation in 'Art, Design and Technology' and ‘Interactive Digital Media’ broadens my perspective within the broader multidisciplinary realm of digital art and media."
          imagePosition="left"
         
          githubVisibility="hide"
        />
         <TeamCard
          name="Ksenia Anokhina"
          roles={["Developer", "Designer", "Project Manager"]}
          description="I am a Developer specializing in Vue.js and React, leveraging these frameworks to craft intuitive frontend solutions. Passionate about data visualization and recognized as a creative technologist, I thrive on designing user-centered structures that enhance overall user experiences. My academic foundation in 'Art, Design and Technology' and ‘Interactive Digital Media’ broadens my perspective within the broader multidisciplinary realm of digital art and media."
         porfolioVisibility="hide"
        />
         <TeamCard
          name="Ksenia Anokhina"
          roles={["Developer", "Designer"]}
          description="I am a Developer specializing in Vue.js and React, leveraging these frameworks to craft intuitive frontend solutions. Passionate about data visualization and recognized as a creative technologist, I thrive on designing user-centered structures that enhance overall user experiences. My academic foundation in 'Art, Design and Technology' and ‘Interactive Digital Media’ broadens my perspective within the broader multidisciplinary realm of digital art and media."
          imagePosition="left"
        />
          <TeamCard
          name="Ksenia Anokhina"
          roles={["Developer", "Designer", "Project Manager"]}
          description="I am a Developer specializing in Vue.js and React, leveraging these frameworks to craft intuitive frontend solutions. Passionate about data visualization and recognized as a creative technologist, I thrive on designing user-centered structures that enhance overall user experiences. My academic foundation in 'Art, Design and Technology' and ‘Interactive Digital Media’ broadens my perspective within the broader multidisciplinary realm of digital art and media."
        />
      </div>
      <div className="block" id="donate">
        <Title text="Donation block?" />
        <p>Patreon integration?? </p>
      </div>
      <div className="block" id="contact">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
