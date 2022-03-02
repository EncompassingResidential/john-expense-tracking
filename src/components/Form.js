import React from "react"

import './form.css';

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            textArea: "",
            isFriendly: true,
            employment: "",
            partTime: "",
            fullTime: ""
        }
    )
    
    console.log(`formData is ${JSON.stringify(formData)}`)

    function handleChange(event) {
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <form className="form--input">
            <text>3/02/22 Scrimba testing Form</text>
            <input
                className="form--elements"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName} // This "value={}" is how to impliment controlled components
            />
            <input
                className="form--elements"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}  // React sometimes will complain that there are un-controlled components if this isn't done.
            />
            <input
                className="form--elements"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                className="form--elements textarea--element"
                placeholder="Text Area"
                onChange={handleChange}
                name="textArea"
                value={formData.textArea}
            />
            <div className="checkbox--area">
                <input type="checkbox"
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    
                    className="checkbox--element"
                    placeholder="Checkbox"
                    name="isFriendly"
                    value={formData.textArea}
                    />
                <label 
                    htmlFor="isFriendly"
                    className="checkbox--label"
                >Are you friendly?</label>
            </div>

            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status  </legend>
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

        </form>
    )
}