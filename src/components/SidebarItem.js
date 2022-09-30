import React, {useState} from "react";
import { Link } from "react-router-dom";

function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title" onClick={() => setOpen(!open)}>
                <span>
                    <Link to={`/dashboard/${item.path}`}>
                        {item.icon && <i className="imgIcon">{item.icon}</i>}
                        {item.title}
                    </Link>
                </span>
                <i className="toggle-btn" >{item.iconClosed}</i>
            </div>
            <div className="sidebar-content">
                { item.childrens && item.childrens.map( (child, index) => <SidebarItem key={index} item={child}/> ) }
            </div>
        </div>
    )
    
}

export default SidebarItem;