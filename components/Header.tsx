import React from 'react'
import Container from './ui/container'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
                <div className='flex items-center'>
                    <Link href="/" >
                        <h1 className='text-xl font-bold uppercase'>
                            store name
                        </h1>
                    </Link>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header