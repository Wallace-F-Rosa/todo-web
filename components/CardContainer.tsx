'use client'
import { TaskDTO } from '@/app/dto/task.dto'
import TaskCard from './TaskCard'
import AddTaskCard from './AddTaskCard'
import { Dispatch, SetStateAction } from 'react'

export default function CardContainer({
    cardsData,
    setCardsData,
    ...props
}: {
    cardsData: TaskDTO[]
    setCardsData: Dispatch<SetStateAction<TaskDTO[]>>
}) {
    let taskCards = []
    for (const card of cardsData) {
        taskCards.push(
            <TaskCard task={card} key={card.id} setTasks={setCardsData} />
        )
    }
    return (
        <div className='grid w-full grid-cols-4 gap-2 p-2'>
            {...taskCards}
            <AddTaskCard tasks={cardsData} setTasks={setCardsData} />
        </div>
    )
}
