import React from "react";
import SkillListItem from "./SkillListItem";
import "./SkillList.css"
import "./App"
function SkillList(props) {
    return(
    <div className="SkillList">
    <ul>
        {props.skills.map((skill, idx) => (<SkillListItem skill={skill} key={idx+skill} index={idx}/>))}
    </ul>
   
    </div>
    )
}

export default SkillList;