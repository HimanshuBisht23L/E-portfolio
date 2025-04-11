import React from 'react'
import "../styles/homebody.css"
import { Link } from 'react-router-dom'

export default function HomeBody() {
    return (
        <section class="hero">
            <div class="content">
                <h1>Himanshu Bisht</h1>
                <p class="subtitle">E-Portfolio</p>
                <div class="social-links">
                    <Link to="https://www.linkedin.com/in/himanshu-bisht-a6b7b8347/" target="_blank"><img src="/images/linkedin.png" alt="LinkedIn" /></Link>
                    <Link to="https://github.com/HimanshuBisht23L" target="_blank"><img src="/images/github.png" alt="GitHub" /></Link>
                </div>
            </div>

            {/* Upload Your image here */}
            <div class="svgContainer">
                <img src="\images\ePortfolio.jpg" alt="Image" />
            </div>

        </section>
    )
}
