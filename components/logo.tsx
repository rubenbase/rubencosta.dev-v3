import React from 'react'
import Link from 'next/link'
import { Text } from 'evergreen-ui'

const Logo = ({ ...styles }) => {
  return (
    <Link href="/">
      <a>
        <Text fontSize="30px" {...styles}>
          <strong>Lenatt.</strong>
        </Text>
      </a>
    </Link>
  )
}

export default Logo
