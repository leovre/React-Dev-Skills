import React from "react";
import "./NewSkillForm.css"
function NewSkillForm(){
    return(
        <div className="NewSkillForm">
        <form action="">
            <label htmlFor="">Skill </label>
            <input type="text" className="input"/> <br />
            <label htmlFor="">Level</label>
            <select name="options" id="" className="input">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
            <button type="submit">ADD SKILL</button>
        </form>
        </div>
    )
}

export default NewSkillForm;