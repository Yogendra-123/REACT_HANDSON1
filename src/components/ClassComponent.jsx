import React from "react";
import { useState } from 'react'
import './ClassComponent.css'


const ClassComponent = () => {
    const [box2 ,setModel2] = useState(false);

    const Button2 = () => {
        
        setModel2(!box2)
        }
        return (
            <div>
                <button onClick={Button2} className='classc'>To see Styling using Class Component</button>

                {box2 && (
                    <div className='box2'>
                        <h1><i>This is created using class component</i></h1>
                        <p className='para'>This is done using external css</p>
                        <p style={{ color: 'blue', fontWeight: 'bold' }}>This is done using internal css</p>
                    </div>
                )}
            </div>
        )
    }


export default ClassComponent;