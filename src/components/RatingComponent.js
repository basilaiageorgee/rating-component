import { useState } from "react"
import IconStar from "../images/icon-star.svg"
import "./RatingComponent.css"


const RatingComponent = ({handleRating}) => {
    const [currentRating, setCurrentRating] =  useState(false)
    return(
        <div className="rating_component">
            <div className="icon-star-div"><img className="icon-star" src={IconStar}/></div>

            <div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>

            <div className="rating_buttons">
                {[1,2,3,4,5].map(i => <button className="rating_button" onClick={() => setCurrentRating(i)} key={i}>{i}</button>)}

            </div>

            <div className="sumbit-div">
                    <button onClick={() => handleRating(currentRating)} className="sumbit_btn">SUBMIT</button>
                </div>

        </div>
    )
}

export default RatingComponent