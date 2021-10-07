import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("Clicked the functional button")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click me Functional Component</button>
        </div>
    )
}

export default EventsFunctional
