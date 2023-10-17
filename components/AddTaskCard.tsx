import { TaskDTO } from '@/app/dto/task.dto'
import { Button, Card, Label, Modal, TextInput } from 'flowbite-react'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { GrAdd } from 'react-icons/gr'

export default function AddTaskCard({
    tasks,
    setTasks,
}: {
    tasks: TaskDTO[]
    setTasks: Dispatch<SetStateAction<TaskDTO[]>>
}) {
    const [visible, setVisible] = useState(false)

    const showModalOnClick = () => {
        setVisible((visible) => !visible)
    }

    let taskTitle = ''
    let taskDescription = ''
    const createNewTask = () => {
        console.log(taskTitle, taskDescription)
        const task: TaskDTO = {
            id: (tasks.length + 1).toString(),
            createdAt: new Date(),
            description: taskDescription,
            name: taskTitle,
            done: false,
            userId: '2',
        }
        setTasks((tasks) => [...tasks, task])
    }

    return (
        <>
            <Card
                className='items-center border-dashed border-secondary-dark bg-white hover:cursor-pointer hover:bg-primary-dark'
                onClick={showModalOnClick}
            >
                <GrAdd size={28} />
            </Card>
            <Modal
                show={visible}
                onClose={() => setVisible((visible) => !visible)}
            >
                <Modal.Header>New Task</Modal.Header>
                <form>
                    <Modal.Body>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='taskName' value='Title' />
                                </div>
                                <TextInput
                                    id='taskName'
                                    placeholder='Task Title'
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
                                    placeholder='Task Description'
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
                            type='submit'
                            className='bg-primary-dark text-white'
                            onClick={createNewTask}
                        >
                            Create
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
