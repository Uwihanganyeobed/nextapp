'use client'
export default function Settings() {
    const createUser = async()=>{
        const res= await fetch('/api/users',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John",
                age: 25
            })
        })
        const data = await res.json()
        console.log('response:',data )
    }
  return (
    <div className="p-6">
      <button onClick={createUser}>Create User</button>
    </div>
  )
}
