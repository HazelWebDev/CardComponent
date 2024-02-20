import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return(
    <img className="avatar" src="Purple Watercolor Desktop Wallpaper.png"></img>
  )
}

function Intro() {
  return(
    <div>
      <h2 className="h1">Hi, I'm Kristen</h2>
      <p className="body">I'm a small town web developer who is fascinated by 
      the creativity of web development!</p>
    </div>
  )
}

function SkillList() {
  return(
    <div className="skill-list">
      <Skill skill="HTML & CSS" color="#D4BEBE" />
      <Skill skill="JavaScript" color="#E1DEE9"/>
      <Skill skill="Web Development" color="#D5CFE1"/>
      <Skill skill="React.JS" color="#B6A6CA"/>
      <Skill skill="TailwindCSS" color="#A09ABC"/>

    {/* or do it this way without props, but you lose cool points
    <h6 className="skill">Web Development</h6>
    <h6 className="skill">TailwindCSS</h6>
    <h6 className="skill">React.JS</h6> */}
    </div>
  )
}

function Skill(props) {
  return(
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
