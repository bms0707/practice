import React from "react";
import "./css/Poll1TotalList.css";

function Poll1TotalList(){
    return (
        <div className="info">
            <div className="totalList"></div>
            <div className="selects">
                <select></select>
                <select></select>
            </div>
            <div className="list"></div>
            <div className="creates">
                <button>1차 폴 생성</button>
                <button>2차 폴 생성</button>
            </div>
        </div>
    )

}

export default Poll1TotalList;