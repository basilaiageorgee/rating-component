import { useState } from "react";
import RatingComponent from "./components/RatingComponent";
import ResponseComponent from "./components/ResponseComponent";
import "./App.css"

function App() {
  const [rating, setRating] = useState(false)

  if (rating){
    return(
      <ResponseComponent rating={rating}/>
    )
  }
  return (
    <div className="container">
      <RatingComponent handleRating={setRating}/>
    </div>
  );
}

export default App;
