import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = ({ ...props }) => {
    return (
        <Stack
            as='nav'
            spacing={4}
            {...props}
        >
            <Link as={RouterLink} to='/'>Home</Link>
            <Link href='#about'>About</Link>
            <Link href='#menu'>Menu</Link>
            <Link href='#reservations'>Reservations</Link>
            <Link href='#orderOnline'>Order Online</Link>
            <Link as={RouterLink} to='/login'>Login</Link>
        </Stack>
    )
}

export default Navigation;