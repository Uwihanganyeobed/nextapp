import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-blue-600 text-white p-4 flex 
    justify-between itms-center'>
            <h1 className='text-xl font-bold'>LoremStockApp</h1>
            <div className="flex gap-4">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}
