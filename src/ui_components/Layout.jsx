import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Layout(){
    return (
        <>
        <header className="baselayout-header">
            <div className="wrapper">
                <Link className="link-to-home" to="/"><h1>Reminder</h1></Link>
            </div>
        </header>
        <section className="baselayout-section-container">
            <Outlet />
        </section>
        <footer className="baselayout-footer">
            <div className="wrapper">
                <p>&copy; 2025 reminder bot</p>
            </div>
        </footer>
        </>
    )
}