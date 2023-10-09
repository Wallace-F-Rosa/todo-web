'use client'
import Image from 'next/image'
import TodoLogo from '@/public/todo.svg'
import React from 'react'
import { Button } from 'flowbite-react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='h-15 flex w-full flex-row border-b-2 border-gray-400 bg-primary-dark px-4 py-4'>
            <Image src={TodoLogo} alt='// TODO'></Image>
            <div className='flex w-full justify-end justify-items-center gap-x-4'>
                <Link
                    href={'/login'}
                    className='text-white hover:text-secondary-dark'
                >
                    Log in
                </Link>
                <Link
                    href={'/register'}
                    className='text-white hover:text-secondary-dark'
                >
                    Register
                </Link>
            </div>
        </nav>
    )
}
