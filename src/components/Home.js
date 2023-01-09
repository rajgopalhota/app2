import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Home() {
    const Navigate = useNavigate();
  return (
    <div>
        <h1>This is Home page</h1>
       {/* <div className="ver"></div> */}
       <button onClick={() => Navigate('order')}>Click me</button>
    </div>
  )
}
