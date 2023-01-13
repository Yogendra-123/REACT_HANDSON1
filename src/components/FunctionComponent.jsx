import React from 'react'
import { useState } from 'react'
import './FunctionComponent.css'


const FunctionComponent = () =>{

const [box1 ,setModel] = useState(false);

const ToggleModel = () => {
    setModel(!box1)
}

    return(
        <>
        <button onClick={ToggleModel} className='funcc'>To see Styling using Functional Component</button>

        {box1 && (
            <div className='box1'>
                <h1><i>This is created using function component</i></h1>
                <p className='para'>This is done using external css</p>
                <p style={{color:'blue', fontWeight:'bold'}}>This is done using internal css</p>
            </div>
        )}
        </>
    )
}
export default FunctionComponent;