import { Box } from '@chakra-ui/react';
import React from 'react';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import Testimonials from '../../components/Testimonials';

const Home = () => {
    return (
        <Box as="main">
            <Hero />
            <Highlights />
            <Testimonials />
        </Box>
    )
}

export default Home;