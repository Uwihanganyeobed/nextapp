'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Update() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const {id} = useParams()
    const router = useRouter() 

    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await fetch(`/api/users/${id}`)
            const data = await res.json()
            const user = Array.isArray(data) ? data[0]: data
            setName(user.name)
            setEmail(user.email)
        }
        fetchUser()
    },[id])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await fetch(`/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });
        setName("");
        setEmail("");
        alert("User updated successfully");
        router.push('/students')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}> 
    UserName : <br />
    <input className="border border-gray-300 rounded-md p-2" type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
    Email : <br />
    <input className="border border-gray-300 rounded-md p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700" type="submit">Update User</button>
    </form>
    </div>
  )
}
