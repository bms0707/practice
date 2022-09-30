import React from "react";
import Sidebar from "./Sidebar";
import "./css/Dashboard.css";
import DateProfile from "./DateProfile";
import Info from "./Info";
import Poll1TotalList from "./Poll1TotalList";
import Poll1BalanceGame from "./Poll1BalanceGame";
import Poll1UpDown from "./Poll1UpDown"

function Dashboard(){
    return (
        <div className="main">
            <div className="sideheader">
                <Sidebar />
            </div>
            <div className="container2">
                <DateProfile />
                <Info />
                {/* <Poll1TotalList /> */}
                {/* <Poll1UpDown /> */}
            </div>
        </div>
    )
}

export default Dashboard;