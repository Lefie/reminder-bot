import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";

export default function ViewAllReminders(){
    const [allReminders, setAllReminders] = useState([])

    return (<>
    {allReminders && allReminders.length > 0 && 
    (<>

     </>)}

     {allReminders && allReminders.length == 0 && 
      (<>
      <p className="no-reminders-msg">No reminders. You are all up to date</p>
     </>)}

    </>)
}