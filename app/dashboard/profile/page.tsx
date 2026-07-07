'use client'
import { useEffect, useState } from "react";
type User={
    id: number;
    name: string
}
export default function Profile() {
    const [users,setUsers]= useState<User[]>([]);
    useEffect(()=>{
        async function fetchUsers() {
            const res = await fetch('/api/users')
            const data = await res.json()
            setUsers(data)            
        }
        fetchUsers()
    },[])

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Users</h1>
      {users.map((user)=>(
        <p key={user.id}>{user.id} - {user.name}</p>
      ))}
    </div>
  )
}
