import React from 'react'
import Container from 'components/container'
import Link from 'next/link'

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-wrap py-10 mb-2 px-4 space-x-4">
        <Link href="/">
          <a className="font-normal text-xl cursor-pointer hover:text-gray-800">
            Ruben Costa |
          </a>
        </Link>
        <Link href="/">
          <a className="font-thin text-xl cursor-pointer hover:text-gray-500">contact</a>
        </Link>
        <Link href="/">
          <a className="font-thin text-xl cursor-pointer hover:text-gray-500">blog</a>
        </Link>
        <Link href="/">
          <a className="font-thin text-xl cursor-pointer hover:text-gray-500">courses</a>
        </Link>
        <Link href="/">
          <a className="font-thin text-xl cursor-pointer hover:text-gray-500">about me</a>
        </Link>
      </div>
    </Container>
  )
}

export default Footer
