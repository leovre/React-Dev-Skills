import logo from './logo.svg';
import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from 'react';



function App() {
  const [skills, setSkills] = useState([
    {name: "HTML", level: 5},
    {name: "CSS", level: 3},
    {name: "Javascript", level: 4},
    {name: "Python", level: 2},
  ]);
  
  return (
    <div className="App">
     <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <NewSkillForm/>
    </div>
  );
}

export default App;
