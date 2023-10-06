'use client'
import Image from 'next/image'
import TodoLogo from '@/public/todo.svg'
import React from 'react'
import { Button } from 'flowbite-react'
import Link from 'next/link'


export default function Navbar() {
    return (
        <nav className="w-full px-4 py-4 h-15 bg-primary-dark flex flex-row border-b-2 border-gray-400">
            <Image src={TodoLogo} alt="// TODO"></Image>
            <div className='w-full flex justify-end gap-x-4 justify-items-center'>
                <Link href={'/login'} className='text-white hover:text-secondary-dark'>Log in</Link>
                <Link href={'/register'} className='text-white hover:text-secondary-dark'>Register</Link>
            </div>
        </nav>
    )
}