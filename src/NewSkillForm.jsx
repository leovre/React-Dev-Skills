import './App'
import React, {useState} from "react";
import "./NewSkillForm.css"

function NewSkillForm(props){
    
    const [newSkill, setNewSkill] = useState({name: "", level: 1});
    
      function handleInputChange(e){
        setNewSkill({...newSkill, [e.target.name]: e.target.value})
    }

    function handleAdd(e){
        e.preventDefault()
        props.handleAddSkill(newSkill)
        setNewSkill({name: "", level:1})
    }

  
    return(
        <div className="NewSkillForm">
        <form onSubmit={handleAdd}>
            <label>Skill </label>
            <input name="name" type="text" className="input" value={newSkill.name} onChange={handleInputChange} required/> <br />
            <label>Level</label>
            <select name="level" className="input" value={newSkill.level} onChange={handleInputChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select> 
            <button type="submit">ADD SKILL</button>
        </form>
        </div>
    )
}

export default NewSkillForm;