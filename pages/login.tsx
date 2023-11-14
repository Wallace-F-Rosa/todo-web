'use client'
import Navbar from '@/components/Navbar'
import '@/app/globals.css'
import { Button, Label, TextInput } from 'flowbite-react'

export default function Login() {
    let username = ''
    let password = ''
    return (
        <main className='h-screen w-screen bg-white'>
            <Navbar variant={'login'} />
            <div className='flex w-full justify-center p-8'>
                <form className='z-10 flex max-w-fit flex-col gap-4 rounded bg-white p-10 outline outline-2 outline-secondary-dark'>
                    <div>
                        <div className='flex flex-col gap-8'>
                            <div className='mb-4 block'>
                                <Label
                                    htmlFor='username'
                                    value='Usename'
                                ></Label>
                            </div>
                        </div>
                        <TextInput
                            id='username'
                            placeholder='Username'
                            required
                            type='text'
                            minLength={10}
                            onChange={(event) =>
                                (username = event.currentTarget.value)
                            }
                        ></TextInput>
                    </div>
                    <div>
                        <div className='flex flex-col gap-8'>
                            <div className='mb-4 block'>
                                <Label
                                    htmlFor='password'
                                    value='Password'
                                ></Label>
                            </div>
                        </div>
                        <TextInput
                            id='password'
                            placeholder='Password'
                            required
                            type='text'
                            minLength={10}
                            onChange={(event) =>
                                (password = event.currentTarget.value)
                            }
                        ></TextInput>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Button
                            type='button'
                            outline
                            className='outline-sencoday-dark outline outline-2'
                        >
                            Login
                        </Button>
                        <Button
                            type='button'
                            className='bg-primary-dark text-white'
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}
