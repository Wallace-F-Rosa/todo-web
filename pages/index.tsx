'use client'
import Navbar from '@/components/Navbar'
import CardContainer from '@/components/CardContainer'
import '@/app/globals.css'
import { TaskDTO } from '@/app/dto/task.dto'
import { useState } from 'react'

export default function Home() {
    let data: TaskDTO[] = [
        {
            id: '1',
            name: 'test title',
            description: 'test description',
            createdAt: new Date(),
            userId: '',
            done: false,
        },
    ]
    let [tasks, setTasks] = useState(data)
    return (
        <main className='h-screen w-screen bg-white'>
            <Navbar variant={'logged'} />
            <CardContainer cardsData={tasks} setCardsData={setTasks} />
        </main>
    )
}
