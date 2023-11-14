'use client'
import { TaskDTO } from '@/app/dto/task.dto'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { ModalBody } from 'flowbite-react/lib/esm/components/Modal/ModalBody'
import { Dispatch, SetStateAction, useState } from 'react'
import { HiCheck, HiPencilAlt, HiTrash, HiX } from 'react-icons/hi'

export default function TaskCard({
    task,
    setTasks,
    ...props
}: {
    task: TaskDTO
    setTasks: Dispatch<SetStateAction<TaskDTO[]>>
}) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showEditTaskModal = () => {
        setIsModalVisible((visible) => !visible)
    }

    let taskTitle = task.name
    let taskDescription = task.description

    const editTask = () => {
        task.name = taskTitle
        task.description = taskDescription
        setIsModalVisible((visible) => !visible)
    }

    const deleteTask = () => {
        setTasks((tasks) => tasks.filter((t) => t.id != task.id))
    }

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
                            onClick={showEditTaskModal}
                        ></HiPencilAlt>
                        <HiTrash
                            className='fill-secondary-dark'
                            size={22}
                            onClick={deleteTask}
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
            <Modal
                show={isModalVisible}
                onClose={() => setIsModalVisible((visible) => !visible)}
            >
                <Modal.Header>Edit Task</Modal.Header>
                <form>
                    <Modal.Body>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='taskName' value='Title' />
                                </div>
                                <TextInput
                                    id='taskName'
                                    placeholder={taskTitle}
                                    required
                                    type='text'
                                    minLength={2}
                                    onChange={(event) =>
                                        (taskTitle = event.currentTarget.value)
                                    }
                                />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label
                                        htmlFor='taskDescription'
                                        value='Description'
                                    />
                                </div>
                                <TextInput
                                    id='taskDescription'
                                    placeholder={taskDescription}
                                    required
                                    type='text'
                                    onChange={(event) =>
                                        (taskDescription =
                                            event.currentTarget.value)
                                    }
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-end'>
                        <Button
                            type='button'
                            className='bg-primary-dark text-white'
                            onClick={editTask}
                        >
                            Edit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
