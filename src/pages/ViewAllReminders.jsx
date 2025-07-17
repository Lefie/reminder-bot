import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { getRemindersArray, deleteReminderById } from "../../apis";

export default function ViewAllReminders(){
    const [allReminders, setAllReminders] = useState()
    const [viewReminders, setViewReminders] = useState()

    useEffect(()=>{
            async function populateReminders(){
                const reminders_arr = await getRemindersArray()
                setAllReminders(reminders_arr)
                setViewReminders(reminders_arr)
            }
            populateReminders()
    },[])
    
    const [searchContent, setSearchContent] = useState("")
    const [reminderDateActive, setRDActive] = useState("")
    const [topReminderActive, setTopReminderActive] = useState("")
    const [monthReminderActive, setMonthReminderActive] = useState("")

    function search(){
        
        console.log("search ", searchContent,"jkn")
        if (reminderDateActive) {
            console.log("reminder date")
            const a = /^\d{4}-\d{2}-\d{2}$/
            const res = searchContent.match(a)
            if (res) {
                setViewReminders(allReminders.filter((reminder) => reminder.reminder_date.slice(0,10) === searchContent))
            }
        }
        else if (topReminderActive) {
            if ( !isNaN(searchContent) ) {
                const num = parseInt(searchContent)
                if (num >= allReminders.length) {
                    console.log("show all")
                    setViewReminders(allReminders)
                }else{
                    setViewReminders(allReminders.slice(0,searchContent))
                }
            }
        }
        else if (monthReminderActive) {
            console.log("month reminder reminder")
            if ( !isNaN(searchContent) ) { 
                const num = parseInt(searchContent)
                if (num <= 0 || num >= 13) {
                    console.log("month is not valid")
                }else{
                    console.log(allReminders[0].reminder_date)
                    setViewReminders(allReminders.filter((reminder)=> num === new Date(reminder.reminder_date).getMonth() + 1 ))
                }
            }
        }
        else {
            setViewReminders(allReminders)
        }
    }

    async function handleDelete(reminder_id) {
        console.log("delete", reminder_id)
        const data = await deleteReminderById(reminder_id)
        if(data === "deleted") {
            console.log("delete successful")
            const reminders_arr = await getRemindersArray()
            setAllReminders(reminders_arr)
            setViewReminders(reminders_arr)
        }
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
                value={searchContent}
                onChange={(e)=>setSearchContent(e.target.value)}
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
            {viewReminders && viewReminders.length > 0 && viewReminders.map((reminder)=>(
            <>
                <article className="reminder-details">
                    <p>{reminder.event_name}</p>
                    <p>{reminder.event_from}</p>
                    <p>{reminder.event_to}</p>
                    <p>{reminder.recurringtype}</p>
                    <p>{reminder.reminder_date.slice(0,10)}</p>
                    <article className="reminder-modifiers">
                        <Link to={`../edit-reminder/${reminder.reminder_id}`}><button className="btn reminder-edit-btn">E</button></Link>
                        <button onClick={()=> handleDelete(reminder.reminder_id)} className="btn reminder-delete-btn">X</button>
                    </article>
                </article>
            </>))}
           

            {viewReminders && viewReminders.length == 0 && 
            (<>
                <p className="no-reminders-msg">No reminders. You are all up to date</p>
            </>)}
        </div>
        
     </section>

    </>)
}