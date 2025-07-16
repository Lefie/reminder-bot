import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getRemindersArray } from "../../apis";

export default function Home(){
    

    const [reminders, setReminders] = useState([])

    useEffect(()=>{
        async function populateReminders(){
            const reminders_arr = await getRemindersArray()
            if (reminders_arr.length >= 3) {
                setReminders(reminders_arr.slice(0,3))
            }else {
                setReminders(reminders_arr)
            }
        }
        populateReminders()
    },[])

    return <>
        <section className="home-page">
            <h2 className="upcoming-reminders">Upcoming Reminders</h2>
            <article className="reminders-section">
                <div className="reminders-container">
                    {reminders && reminders.length >= 3 ? <>{
                    
                    reminders.map((reminder)=>(
                        <>
                            <article className="reminder-details">
                                <p>{reminder.event_name}</p>
                                <p>{reminder.event_from}</p>
                                <p>{reminder.event_to}</p>
                                <p>{reminder.recurringtype}</p>
                                <p>{reminder.reminder_date.slice(0,10)}</p>
                            </article>
                        </>
                    ))} 
                    <p className="reminders-msg">...more</p> 
                    </> : <> {
                    reminders.map((reminder)=>(
                        <>
                            <article className="reminder-details">
                                <p>{reminder.event_name}</p>
                                <p>{reminder.event_from}</p>
                                <p>{reminder.event_to}</p>
                                <p>{reminder.recurringtype}</p>
                                <p>{reminder.reminder_date.slice(0,10)}</p>
                            </article>
                        </>
                        
                    ))}
                    <p className="reminders-msg">You are all up to date </p>
                    </>}
                   
                    {reminders && reminders.length == 0 && <>
                       <p className="no-reminders-msg">No reminders. You are all up to date</p>
                    </>}
                </div>
            </article>

            <article className="reminder-btns-container">
                <Link to="add-reminder">
                    <button className="btn">
                        Add A Reminder
                    </button>
                </Link>
                <Link to="view-all">
                    <button className="btn">
                        See All Reminders
                    </button>
                </Link>
                
            </article>
        </section>
    </>
}