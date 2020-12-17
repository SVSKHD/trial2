import React from "react"
import Typed from "react-typed"

const Type = () =>{
    return(
        <div>
        <Typed
          strings={["Traveling", "Best Packages", "Best Prices"]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1}
          loop
          smartBackspace
        />
        </div>
    )
}
export default Type