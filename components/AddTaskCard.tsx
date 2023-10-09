import { Button, Card, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { GrAdd } from 'react-icons/gr'

export default function AddTaskCard() {
    const [visible, setVisible] = useState(false)

    const showModalOnClick = () => {
        setVisible((visible) => !visible)
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
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-end'>
                        <Button
                            type='submit'
                            className='bg-primary-dark text-white'
                        >
                            Create
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
