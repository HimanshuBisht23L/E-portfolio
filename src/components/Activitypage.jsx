import {React} from 'react'
import activitydata from "../../ActivityData.json"
import "../styles/ActivityPage.css"
import {useNavigate } from 'react-router-dom'

export default function Activitypage() {

  const navigte = useNavigate();

  const naviagAte = (path)=>{
    navigte(`/${path}`)
  }


  return (
    <div className='actv-container'>
      <div className="sub-container">
        <div className="act-heading">
          <svg width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="3" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="44" height="3" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="44" height="3" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg>

          <h1>Activities</h1>

          <svg width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="3" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="44" height="3" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="44" height="3" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg>

        </div>
        <div className="work-data">
          {
            activitydata.map((data) => {
              return (
                <div onClick={()=> naviagAte(`${data.heading}/${data.id}`)} className="work" >
                  <div className="sub-head">
                    <h2>{data.heading}</h2>
                  </div>
                  <div className="work-bio">
                    <p>{data.content}</p>
                  </div>
                  <div className="date">
                    <span>{data.Date}</span>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}


// left
{/* <svg width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg> */ }
// right
{/* <svg width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg> */ }