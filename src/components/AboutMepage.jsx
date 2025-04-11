import React from 'react'
import "../styles/Aboutpage.css"

export default function AboutMepage() {
  return (
    <div className="about-page">

      <div className='main-context'>
        <div className="context">
          <div className="heading">
            <h1>Brief About Me</h1>
          </div>
          <div className="data-container">
            <p>I am Himanshu Bisht, a graduate aspiring to become a full stack developer. I have a passion for coding and creating software solutions.<br /><br />
              I have over 1.5 years of experience of coding. I specializes in JavaScript and has extensive knowledge of popular frameworks like Bootstrap, Express.<br /><br />
              I Currently Pursuing Bachelor's degree in Computer Science from a reputed university (Graphic Era University). I has worked on complex projects for My Dreams and I am a Stubborn Type person in Coding.<br /><br />
              My portfolio currently showcases a range of impressive mini projects including a Speech to Text Converter, Some Small Games and for a Major Project Currently Working in My Site Agro-Ai.
            </p>
            <img src="images/Himu.jpg" alt="My Image" />
          </div>
        </div>
      </div>

      <div className="knowledge-sec">

        <h1>Knowledge About</h1>

        <div className="box-content">

          <div className="text">
            <p>I have a base foundation in HTML, CSS, C, C++, JavaScript, React, and Node.js. My expertise extends to backend development with Node.js and Express.js, along with frontend styling using Bootstrap, CSS. I enjoy working on full-stack projects and continuously expanding my skills in web development.</p>
          </div>

          <div className="ui-boxes">
            <div className="box box1">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="svg-inline--fa fa-code fa-fw icon " role="img" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-testid="icon-test"><path fill="#00fff6ba" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>
              <h2>Web</h2>
              <p>I Like building modern, responsive websites optimized for performance and user experience.</p>
            </div>
            <div className="box box2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="object-ungroup" class="svg-inline--fa fa-object-ungroup fa-fw icon " width="30" height="30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-testid="icon-test"><path fill="#00fff6ba" d="M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32H328.6C339.6 12.9 360.3 0 384 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V232.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H119.4c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V119.4zM119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4V232.6c9.7 5.6 17.8 13.7 23.4 23.4H328.6c5.6-9.7 13.7-17.8 23.4-23.4V119.4c-9.7-5.6-17.8-13.7-23.4-23.4H119.4zm192 384c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V352h64v40.6c9.7 5.6 17.8 13.7 23.4 23.4H520.6c5.6-9.7 13.7-17.8 23.4-23.4V279.4c-9.7-5.6-17.8-13.7-23.4-23.4h-46c-5.4-15.4-14.6-28.9-26.5-39.6V192h72.6c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V392.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H311.4z"></path></svg>
              <h2>UI</h2>
              <p>I learn to crafts highly functional user interfaces optimized for target platforms and devices.</p>
            </div>
            <div className="box box3">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="server" class="svg-inline--fa fa-server fa-fw icon " width="30" height="30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-testid="icon-test"><path fill="#00fff6ba" d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
              <h2>API</h2>
              <p>I know API's Knowledge, how to fetch apis and use them in Multitasking.</p>
            </div>
            <div className="box box4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" class="svg-inline--fa fa-brain fa-fw icon " width="30" height="30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-testid="icon-test"><path fill="#00fff6ba" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"></path></svg>
              <h2>AI</h2>
              <p>I know how to AI-techs like chatbots, etc to enhance digital products.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
