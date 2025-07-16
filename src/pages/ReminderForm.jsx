import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getReminderItemById } from "../../apis";

export default function ReminderForm({form_mode}){
    const {reminder_id} = useParams()
    console.log(reminder_id)
   
    
    const [mode, setMode] = useState(form_mode) //adding / editing
    const [formValue, setFormValue] = useState({
        "event_name":"",
        "event_from":"",
        "event_to":"",
        "reminder_date":"",
        "recurring_type":"",
        "day_of_week":"",
        "day_of_month":""
    })

    // use a use - effect to check if form_mode is editing, then the formValue should be populated with data 
    if (form_mode === "editing"){
        useEffect(()=>{
            async function populateReminder(reminder_id){
                const reminder_data = await getReminderItemById(reminder_id)
                console.log(reminder_data)
                console.log(reminder_data["reminder_date"].slice(0,10))
                setFormValue(prev =>({
                    ...prev,
                    "event_name":reminder_data["event_name"],
                    "event_from":reminder_data["event_from"],
                    "event_to":reminder_data["event_to"],
                    "reminder_date":reminder_data["reminder_date"].slice(0,10),
                    "recurring_type":reminder_data["recurringtype"],
                    "day_of_week":reminder_data["day_of_week"],
                    "day_of_month":reminder_data["day_of_month"]
                }))
            }
            populateReminder(reminder_id)
        },[reminder_id])
    }

    function handleValue(e) {
        const target_ele = e.target
        console.log(target_ele, target_ele.name, target_ele.type, target_ele.value)
        setFormValue(prev => ({
            ...prev,
            [target_ele.name]: target_ele.value
        }))
    }

    function handleHiddenClassForWeekly() {
        console.log("reccuring type:", formValue["recurring_type"])
       
        if (formValue["recurring_type"] === "weekly"){
            return ""
        }else {
            return "hidden"
        }
    }

    function handleHiddenClassForMonthly() {
        console.log("reccuring type:", formValue["recurring_type"])
       
        if (formValue["recurring_type"] === "monthly"){
            return ""
        }else {
            return "hidden"
        }
    }
    

    function submitFrom(formData){
        // pass
        console.log("submit")
    }

    
        return (<>
            <section className="reminder-container">
                <h1>Reminder Form {mode === "editing" &&<span>(Editing)</span> }</h1>
                <form className="reminder-form" action={submitFrom}>
                    <div className="form-element">
                        <label
                        htmlFor="event_name"
                        >Name</label>
                        <input 
                        required
                        type="text"
                        id="event_name"
                        name="event_name"
                        value={formValue["event_name"]}
                        onChange={handleValue}
                        ></input>
                    </div>

                    <div className="form-element">
                        <label
                        htmlFor="event_from"
                        >Event From</label>
                        <input 
                        type="time"
                        id="event_from"
                        name="event_from"
                        value={formValue["event_from"]}
                        onChange={handleValue}
                        ></input>
                    </div>

                    <div className="form-element">
                        <label
                        htmlFor="event_to"
                        >Event to</label>
                        <input 
                        type="time"
                        id="event_to"
                        name="event_to"
                        value={formValue["event_to"]}
                        onChange={handleValue}
                        ></input>
                    </div>

                    <div className="form-element">
                        <label htmlFor="reminder_date">Reminder Date</label>
                        <input 
                        required
                        type="date"
                        id="reminder_date"
                        name="reminder_date"
                        value={formValue["reminder_date"]}
                        onChange={handleValue}
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor="recurring_type">Recurring Type</label>
                        <select 
                        required
                        id="recurring_type" 
                        name="recurring_type"
                        value={formValue["recurring_type"]}
                        onChange={handleValue}
                        >
                            <option value="none" defaultValue={"none"}>none</option>
                            <option value="daily">daily</option>
                            <option value="weekly">weekly</option>
                            <option value="monthly">monthly</option>
                        </select>
                    </div>

                    <div className={`form-element ${handleHiddenClassForWeekly()}`} id="dow">
                        <label htmlFor="day_of_week"> Day of Week </label>
                        <input  
                        id="day_of_week"
                        name="day_of_week"
                        type="number" 
                        min="1" 
                        max="7"
                        value={formValue["day_of_week"]}
                        onChange={handleValue}
                        />
                    </div>

                    <div className={`form-element ${handleHiddenClassForMonthly()}`} id="dom">
                        <label htmlFor="day_of_month"> Day of Month </label>
                        <input 
                        id="day_of_month"
                        name="day_of_month"
                        type="number" 
                        min="1" 
                        max="31"
                        value={formValue["day_of_month"]}
                        onChange={handleValue}
                         />
                    </div>

                    <button type="submit" className="btn form-btn"> {mode === "editing" ? <span>Update</span> : <span>Add</span> }</button>
                </form>
            </section>
        </>)
    
}