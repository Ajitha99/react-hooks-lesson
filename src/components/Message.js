//to work with any React state, first we need to import it
import { useState } from "react";
const Message = () =>{
    //message - is what holds the current state --eg: current balance
    //setMessage - is a function that changes the state --eg:
    //message and setMessage can be any name; here it is relevant so using the names
    //useState - means we are using useState React hook -- we can put any values like intergers, arrays, strings, undefined, null, objects, boolean true or false
    //In this example: we are going to use Strings 
    const [message, setMessage] = useState("");


    return(
        <div>
            <input 
            type = "text"
            value = {message}
            placeholder="Enter a message"
            //onChange - is a React event listener -- its goint to listen for a change
            //event -is what ever the event && target is -- pointing to specific thing && value is what ever we type in the input field

            //event.target.value
            //in the scope of this example with the input field
            //EVENT - is whatever changes I made in the input box
            //TARGET - is us pointing to that specific change
            //VALUE - is the value that is in the input box
            onChange={ (event) => setMessage(event.target.value)  }
            />
        {/* //Directly invoking the state */}
            <p>{ message }</p>
        </div>
    )
}

export default Message;