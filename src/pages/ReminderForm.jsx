import React from "react";
import { useState } from "react";

export default function ReminderForm({form_mode}){
    const [mode, setMode] = useState(form_mode) //adding / editing

    if (mode === "adding") {
        return (<>
            <section className="add-reminder-container">
                <h1>Reminder Form</h1>
                <form className="new-reminder-form">
                    <div className="form-element">
                        <label
                        htmlFor="event-name"
                        >Name</label>
                        <input 
                        required
                        type="text"
                        id="event-name"
                        name="event-name"
                        ></input>
                    </div>

                    <div className="form-element">
                        <label
                        htmlFor="event-from"
                        >Event From</label>
                        <input 
                        type="time"
                        id="event-from"
                        name="event-from"
                        ></input>
                    </div>

                    <div className="form-element">
                        <label
                        htmlFor="event-to"
                        >Event to</label>
                        <input 
                        type="time"
                        id="event-to"
                        name="event-to"
                        ></input>
                    </div>

                    <div className="form-element">
                        <label htmlFor="reminder_date">Reminder Date</label>
                        <input 
                        required
                        type="date"
                        id="reminder_date"
                        name="reminder_date"
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor="recurring_type">Recurring Type</label>
                        <select 
                        required
                        id="recurring_type" 
                        name="recurring_type"
                        >
                            <option value="none" selected>none</option>
                            <option value="daily">daily</option>
                            <option value="weekly">weekly</option>
                            <option value="monthly">monthly</option>
                        </select>
                    </div>

                    <div className="form-element hidden" id="dow">
                        <label htmlFor="day_of_week"> Day of Week </label>
                        <input  
                        id="day_of_week"
                        name="day_of_week"
                        type="number" 
                        min="1" 
                        max="7"/>
                    </div>

                    <div className="form-element hidden" id="dom">
                        <label for="day_of_month"> Day of Month </label>
                        <input 
                        id="day_of_month"
                        name="day_of_month"
                        type="number" 
                        min="1" 
                        max="31" />
                    </div>

                    <button type="submit" className="btn form-btn">Add!</button>
                </form>
            </section>
        </>)
    }

    if (mode === "editing") {
        return (<>
            <section className="add-reminder-container">
            <p>Edit a reminder form</p>
            </section>
        </>)
    }
    
}