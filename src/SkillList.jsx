import React from "react";
import SkillListItem from "./SkillListItem";

function SkillList(props) {
    return(
    <>
    <ul>
        {props.skills.map((skill, idx) => (<SkillListItem skill={skill} key={idx+skill} index={idx}/>))}
    </ul>
   
    </>
    )
}

export default SkillList;