import React from 'react'
import '../styles/selfques.css'
import selfQues from "../../SelfQuestions.json"

export default function SelfQuespage() {
    return (
        <div className='outer'>
            <h1>Self Questions</h1>
            <a
                href="/16_SelfQuestions.pdf"
                download
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                📄 Download Handwritten Questions (PDF)
            </a>
            <div className="inner">
                <div className="ques-container">

                    {
                        selfQues.map((data) => {
                            // console.log(data.Answer);
                            return (
                                <div className="questions" >
                                    <h3>{data.Ques}</h3>
                                    {
                                        typeof data.Answer === 'string' ? (
                                            <p>{data.Answer}</p>
                                        ) :
                                            (
                                                Array.isArray(data.Answer) ? (
                                                    <ul className='ul-data'>
                                                        {
                                                            data.Answer.map((data) => {
                                                                return (
                                                                    <li>{data}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                ) : (
                                                    <div className='sub-para-content'>
                                                        <div className="content-div">

                                                            {
                                                                Object.values(data.Answer).map((sub_data) => {
                                                                    // console.log(data.Answer);
                                                                    return (
                                                                        <div className="div-subcontent">
                                                                            <h4>{sub_data.subhead}</h4>
                                                                            <p>{sub_data.subdata}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                )
                                            )
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
