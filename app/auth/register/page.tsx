'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Register() {
    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,role,email,password})
        })
            setName('');
            setRole('');
            setEmail('');
            setPassword('');
            toast.success('User Created successfully')
            router.push('/students')
        }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-green-700 p-3 rounded-lg' type="submit">Register</button>
      </form>
    </div>
  )
}
