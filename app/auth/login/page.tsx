'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Register() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
       
            setEmail('');
            setPassword('');
            toast.success('User Created successfully')
            router.push('/students')
        }

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
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
