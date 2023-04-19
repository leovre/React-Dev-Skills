import React from "react";
import "./SkillListItem.css"
import "./App"

function SkillListItem({skill}){
    return(
        <div className="SkillListItem">
        <li>{skill.name} <span className="level">Level {skill.level}</span></li>
        </div>
    )
}

export default SkillListItem;
