'use client'

import { useState } from "react";

export default function Students() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });
        setName("");
        setEmail("");
        alert("User added successfully");
    }

  return (
    <form onSubmit={handleSubmit}> 
    UserName : <br />
    <input className="border border-gray-300 rounded-md p-2" type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
    Email : <br />
    <input className="border border-gray-300 rounded-md p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700" type="submit">Add User</button>
    </form>
  )
}
