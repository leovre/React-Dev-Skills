import React from "react";
import "./SkillListItem.css"
function SkillListItem({skill}){
    return(
        <div className="SkillListItem">
        <li>{skill.name} <span className="level">{skill.level}</span></li>
        </div>
    )
}

export default SkillListItem;
