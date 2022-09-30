import React from "react";
import SidebarData from "./SidebarData";
import SidebarItem from "./SidebarItem";
import "./css/Sidebar.css";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo"></div>
            {SidebarData.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
    )
}

export default Sidebar;