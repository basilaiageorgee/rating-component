import ThankyouImage from "../images/illustration-thank-you.svg"
import "./ResponseComponent.css"

const ResponseComponent = ({rating}) => {
    return(
        <div className="response_component">
            <div className="thankyou-div"><img className="thankyou-star" src={ThankyouImage}/></div>

            <div>
                <p className="ratinginfo">You selected {rating} out of 5</p>
            </div>

            <div className="response">
                <h1>Thank You</h1>

                <p> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! </p>
            </div>

        </div>
    )
}

export default ResponseComponent