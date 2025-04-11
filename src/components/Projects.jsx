import React from 'react'
import "../styles/Projectpage.css"
import jsonData from "../../projectsData.json"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Projects() {

    const responsive = {
        superLargeDesktop: {
            // Do For if need change in responsiveness
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div className='main-container'>
            <div className="container">
                <div className="heading-box">
                    <h1>Web Project's</h1>
                </div>
                <div className="entititlebox">
                    <p>Featured mini web development projects created by me showcasing My skills in HTML, CSS, JavaScript and React.</p>
                </div>

                <div className="project-box">

                <Carousel responsive={responsive}>

                    {
                        jsonData.map((data)=> {
                            return (
                                <div className="pro-box">
                                    <img src={data.img} alt="Project Image 1" />
                                    <h2>{data.Title}</h2>
                                </div>
                            )
                        })
                    }
                </Carousel>

                </div>
            </div>
        </div>
    )
}
