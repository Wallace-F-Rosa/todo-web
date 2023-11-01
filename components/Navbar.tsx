'use client'
import Image from 'next/image'
import TodoLogo from '@/public/todo.svg'
import React from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
import Link from 'next/link'

export default function Navbar({ variant }) {
    let navComplement = null
    if (variant == 'logged') {
        navComplement = (
            <div className='flex w-full justify-end justify-items-center gap-x-4 text-white'>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar rounded className='flex-row-reverse gap-x-4'>
                            <div className='font-medium'>Username</div>
                        </Avatar>
                    }
                >
                    <Dropdown.Item>My info</Dropdown.Item>
                    <Dropdown.Item>About this project</Dropdown.Item>
                </Dropdown>
            </div>
        )
    }

    return (
        <nav className='h-15 flex w-full flex-row border-b-2 border-gray-400 bg-primary-dark px-4 py-4'>
            <Image src={TodoLogo} alt='// TODO'></Image>
            {navComplement != null ? navComplement : <></>}
        </nav>
    )
}
