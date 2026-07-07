'use client'
import React, { useState } from 'react'

export default function Dashboard() {
    const [count,setCount]= useState(0)
  return (
    <div>
        {count}
      <h2>Welcome to my Dashboard User</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
