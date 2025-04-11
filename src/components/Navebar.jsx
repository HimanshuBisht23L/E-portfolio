import React, { useState } from 'react'
import "../styles/navebar.css"
import { Link } from 'react-router-dom'

export default function Navebar() {

    const [hamb, changehamb] = useState(false);

    const Show_Nav_Links = () =>{
        changehamb(!hamb);
    }

    return (
        <nav class="navbar">
            <div class="logo">HB</div>
            <div className="nav-buttons">
                <ul class={hamb ? "mobile-ham" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutMe">About Me</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Activities">Activity</Link></li>
                </ul>
                
                <svg onClick={Show_Nav_Links} className='hamburger' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#54af6b" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </nav>
    )
}

