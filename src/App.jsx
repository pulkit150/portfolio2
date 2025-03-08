import React ,{ useState } from "react"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import useLocalStorage from 'use-local-storage';
import './App.css'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Projects/Project.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Resume from "./components/Experience/Resume.jsx";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = ()=>{
        const newTheme = theme === 'light'?'dark':'light';
        setTheme(newTheme);
    }

    return (
        <>
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme}/>

            <main className="main">
                <Home/>
                <About/>
                <Project/>
                <Resume/>
                <Contact theme={theme}/>
            </main>
        </div>
        
        </>
    )
}

export default App
