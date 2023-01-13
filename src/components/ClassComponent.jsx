import React from "react";
import { Component } from "react";
import { useState } from 'react'
import './ClassComponent.css'


class ClassComponent extends Component {

    render() {
        const Button2 = () => {
            const [box2 ,setModel2] = useState(false);
            setModel2(!box2)
        }
        return (
            <div>
                <button onClick={Button2} className='classc'>To see Styling using Class Component</button>

                {this.box2 && (
                    <div className='box2'>
                        <h1><i>This is created using class component</i></h1>
                        <p className='para'>This is done using external css</p>
                        <p style={{ color: 'blue', fontWeight: 'bold' }}>This is done using internal css</p>
                    </div>
                )}
            </div>
        )
    }
}

export default ClassComponent;