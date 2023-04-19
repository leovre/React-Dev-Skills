import React from "react";

function NewSkillForm(){
    return(
        <>
        <form action="">
            <label htmlFor="">Skill </label>
            <input type="text"/>
            <label htmlFor="">Level</label>
            <select name="options" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
        </>
    )
}

export default NewSkillForm;