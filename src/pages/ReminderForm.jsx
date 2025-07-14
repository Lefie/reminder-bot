import React from "react";
import { useState } from "react";

export default function ReminderForm({form_mode}){
    const [mode, setMode] = useState(form_mode) //adding / editing

    if (mode === "adding") {
        return (<>
            <section className="add-reminder-container">
                <p>Add a reminder form</p>
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