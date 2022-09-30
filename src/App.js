import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App(){
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>}/>
        </Routes>
    </BrowserRouter>
}

export default App;