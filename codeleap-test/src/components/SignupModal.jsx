import { useState } from "react";

function SignupModal ({ setUsername }) {

    const [name, setName] = useState("")

    const handleEnter = () =>{ 
        setUsername(name)
    }


return(

<div>
    <h2>Welcome tO CodeLeap Network</h2>


    <input type="text"
    placeholder="Enter your Name"
    value={name} 
    onChange={(e) => setName(e.target.value)}/
    >
    <button
    disabled={!name}
    onClick={handleEnter}
    >
        ENTER
    </button>
</div>

)
}

export  default SignupModal