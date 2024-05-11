import './notesStyles.css'
import React from "react";
import DashboardNavbar from "../dashboardNavbar/dashboardNavbar";

function Notes() {
    return (
        <>
            <div className='md_navBar'>
                <DashboardNavbar />
            </div>

            <div className='un_primaryScreen'>
                <h1>Page Under Maintenance</h1>
            </div>
        </>
    );
}

export default Notes;