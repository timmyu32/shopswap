import React from 'react'
import { Link } from '@chakra-ui/react';

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem