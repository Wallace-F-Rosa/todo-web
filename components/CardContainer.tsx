'use client'
import { TaskDTO } from "@/app/dto/task.dto"
import TaskCard from "./Card"
import AddTaskCard from "./AddTaskCard"

export default function CardContainer({cardsData, ...props}: {
    cardsData: TaskDTO[]
}) {
    let taskCards = []
    for(const card of cardsData) {
        taskCards.push(
            <TaskCard task={card} key={card.id}/>
        )
    }
    return (
            <div className="w-full p-2 grid grid-cols-4 gap-2">
            {...taskCards}
            <AddTaskCard/>
        </div>
    )
}