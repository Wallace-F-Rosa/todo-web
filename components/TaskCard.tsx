'use client'
import { TaskDTO } from '@/app/dto/task.dto'
import config from '@/tailwind.config'
import { Button, Card } from 'flowbite-react'
import { HiCheck, HiPencilAlt, HiTrash, HiX } from 'react-icons/hi'

export default function TaskCard({ task, ...props }: { task: TaskDTO }) {
    return (
        <>
            <div className='min-w-sm z-10 max-w-sm rounded bg-white p-2 outline outline-2 outline-secondary-dark'>
                <div className='flex flex-row'>
                    <HiCheck
                        className='fill-secondary-dark'
                        size={24}
                    ></HiCheck>
                    <div className='flex w-full flex-row justify-end gap-x-2'>
                        <HiPencilAlt
                            className='fill-secondary-dark'
                            size={22}
                        ></HiPencilAlt>
                        <HiTrash
                            className='fill-secondary-dark'
                            size={22}
                        ></HiTrash>
                    </div>
                </div>
                <div className='mt-2'>
                    <h3 className='tracking-light text-xl font-bold text-gray-900'>
                        {task.name}
                    </h3>
                    <p className='font-normal text-gray-700'>
                        {task.description}
                    </p>
                </div>
            </div>
        </>
    )
}
