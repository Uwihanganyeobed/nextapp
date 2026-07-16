import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the User Management App</h1>
      <p>This is a simple application to manage users.</p>
      <Link className='text-green-500 hover:text-green-700
      ' href="/students/add">Go to Create Student User first</Link>
    </div>
  )
}
