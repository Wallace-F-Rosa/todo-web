'use client'
import { TaskDTO } from '@/app/dto/task.dto'
import { Card } from 'flowbite-react'

export default function TaskCard({ task, ...props }: { task: TaskDTO }) {
    return (
        <Card className='min-w-sm z-10 max-w-sm border-secondary-dark bg-white'>
            <h3 className='tracking-light text-xl font-bold text-gray-900'>
                {task.name}
            </h3>
            <p className='font-normal text-gray-700'>{task.description}</p>
        </Card>
    )
}
