'use client'

import { User } from "@/types/user";
import {Button} from "@/components/ui/button"
import Link from "next/link";
import { useState,useEffect } from "react";
import {toast}  from "sonner"
export default function Students() {
    const [users,setUsers] = useState<User[]>([]);

    useEffect(()=>{
      const fetchUsers = async()=>{
        const res= await fetch('/api/users')
        const data = await res.json();
        setUsers(data);
      }
      fetchUsers();
    },[])

    const handleDelete = async(id:number)=>{
      await fetch(`/api/users/${id}`,{
        method: 'DELETE'
      })
      setUsers(users.filter((user)=> user.id !== id))
      toast.success('User Deleted successfully')
      window.location.reload();
    }
  return (
    <div className="bg-grey-300 ">
      <h2>List of Students</h2>
      <Button variant="default">Welcome</Button> 
      <Link href={'/students/add'}>Create One User</Link>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user)=>(
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Link href={`/students/${user.id}`}>Edit</Link></td>
            <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}