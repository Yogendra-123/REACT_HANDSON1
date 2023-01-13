import React from 'react'
import FunctionComponent from './components/FunctionComponent'
import './components/FunctionComponent.css'
import { ClassComponent } from './components/ClassComponent'

function App(){
  return (
    <div>
     <h1 className='heading'>Styling using Functional and Class Components</h1>
     <div className='boxes'>
      <FunctionComponent/>
      <ClassComponent/>
     </div>
    </div>
  )
}

export default App;