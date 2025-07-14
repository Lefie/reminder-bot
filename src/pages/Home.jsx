import React from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function Home(){

    const [reminders, setReminders] = useState([])
    return <>
        <section className="home-page">
            <h2 className="upcoming-reminders">Upcoming Reminders</h2>
            <article className="reminders-section">
                <div className="reminders-container">
                    {reminders && reminders.length > 0 && <>
                        <p>yay</p>
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