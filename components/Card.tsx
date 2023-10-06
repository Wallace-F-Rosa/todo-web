'use client'
import { TaskDTO } from "@/app/dto/task.dto";
import { Card } from "flowbite-react";

export default function TaskCard({task, ...props}: { task: TaskDTO }) {
    return (
        <Card className="max-w-sm min-w-sm bg-white z-10 border-secondary-dark">
            <h3 className="text-xl font-bold tracking-light text-gray-900">
                {task.name}
            </h3>
            <p className="font-normal text-gray-700">
                {task.description}
            </p>
        </Card>
    )
}