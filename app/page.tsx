import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Link href="/users/10">Users</Link>
      <Link href="/users">Home</Link>
    </div>
  )
}
