import { useState } from "react";

function SignupModal ({ setUsername }) {

    const [name, setName] = useState("")

    const handleEnter = () =>{ 
        setUsername(name)
    }


return(

<div>
    <h2>Welcome tO CodeLeap Network</h2>

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