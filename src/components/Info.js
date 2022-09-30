import React from "react";
import "./css/Info.css";

function Info(){
    return (
        <div className="info">
            <h2 className="mainName">Dashboard</h2>
            <div className="downs">
                <div className="down"></div>
                <div className="down"></div>
                <div className="down"></div>
            </div>
            <div className="points">
                <div className="point"></div>
                <div className="point"></div>
                <div className="graph"></div>
            </div>
            <div className="graphs">
                <div className="graph"></div>
                <div className="graph"></div>
            </div>
            <div className="circleGraph"></div>
        </div>
    );
}

export default Info;