import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router";

export default function ViewAllReminders(){
    const [allReminders, setAllReminders] = useState([{
        "reminder_id": 39,
        "event_name": "parish dinner",
        "event_from": "19:00:00",
        "event_to": "21:00:00",
        "reminder_date": "2025-03-15T04:00:00.000Z",
        "isrecurring": false,
        "recurringtype": "none",
        "day_of_week": "",
        "day_of_month": ""
    }])
    const [reminderDateActive, setRDActive] = useState("")
    const [topReminderActive, setTopReminderActive] = useState("")
    const [monthReminderActive, setMonthReminderActive] = useState("")

    function search(){
        console.log("search ")
    }
    
    function handleActiveClass(e){
        const target = e.target
        console.log( "id",target.id)
        if (target.id === "reminder-date-tag") {
            if (reminderDateActive === "") {
                setTopReminderActive("")
                setMonthReminderActive("")
                setRDActive("active")
            }else {
                setRDActive("")
            }
        }
        
         if (target.id === "top-tag") {
            if (topReminderActive === "") {
                setTopReminderActive("active")
                setMonthReminderActive("")
                setRDActive("")
            }else {
                setTopReminderActive("")
            }
        }
         if (target.id === "month-tag") {
            if (monthReminderActive === "") {
                setMonthReminderActive("active")
                setTopReminderActive("")
                setRDActive("")
            }else {
                setMonthReminderActive("")
            }
        }
    }

    return (<>
    <section className="view-reminders-container">
        <h1>All Reminders</h1>

        <div className="search-bar-container">
            <form action={search}>
                <input 
                type="text"
                name="search-bar"
                id="search-bar"
                placeholder="search something"
                aria-label="search"
                />
                <button className="btn small-btn">Search</button>
            </form>
            <div className="filter-tags">
                    <button onClick={handleActiveClass} className={`btn" filter-btn ${reminderDateActive}`} id="reminder-date-tag">reminder date</button>
                    <button onClick={handleActiveClass} className={`btn" filter-btn ${topReminderActive}`} id="top-tag">top reminders</button>
                    <button onClick={handleActiveClass} className={`btn" filter-btn ${monthReminderActive}`} id="month-tag">month</button>
            </div>
        </div>

        <div className="view-reminders-details-container">
            {allReminders && allReminders.length > 0 && allReminders.map((reminder)=>(
            <>
                <article className="reminder-details">
                    <p>{reminder.event_name}</p>
                    <p>{reminder.event_from}</p>
                    <p>{reminder.event_to}</p>
                    <p>{reminder.recurringtype}</p>
                    <p>{reminder.reminder_date.slice(0,10)}</p>
                    <article className="reminder-modifiers">
                        <Link to={`../edit-reminder/${reminder.reminder_id}`}><button className="btn reminder-edit-btn">E</button></Link>
                        <button className="btn reminder-delete-btn">X</button>
                    </article>
                </article>
            </>))}
           

            {allReminders && allReminders.length == 0 && 
            (<>
                <p className="no-reminders-msg">No reminders. You are all up to date</p>
            </>)}
        </div>
        
     </section>

    </>)
}