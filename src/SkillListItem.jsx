import React from "react";

function SkillListItem({skill}){
    return(
        <li>{skill.name} {skill.level}</li>
    )
}

export default SkillListItem;
