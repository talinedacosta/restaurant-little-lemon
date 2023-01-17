import { Box } from '@chakra-ui/react';
import React from 'react';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';

const Home = () => {
    return (
        <Box as="main">
            <Hero />
            <Highlights />
        </Box>
    )
}

export default Home;