import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";

export default function ViewAllReminders(){
    const [allReminders, setAllReminders] = useState([])

    function search(){
        console.log("search ")
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
        </div>
        
        {allReminders && allReminders.length > 0 && 
        (<>

        </>)}

        {allReminders && allReminders.length == 0 && 
        (<>
        <p className="no-reminders-msg">No reminders. You are all up to date</p>
        </>)}
        
     </section>

    </>)
}