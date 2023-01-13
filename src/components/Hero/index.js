import React from 'react';
import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import Food from '../../assets/image/food.jpg';

const Hero = () => {
    return (
        <Box as='section' backgroundColor='brand.100' bgGradient='linear(to-b, brand.100 75%, white 75%)'>
            <Container p={4} maxW='2xl'>

                <Stack direction={['column', 'row']}>
                    <Box>
                        <VStack spacing={0} align='start'>
                            <Heading as='h1' color='brand.200'>
                                Little Lemon
                            </Heading>
                            <Text fontSize='2xl' color='white' fontWeight='100'>Chicago</Text>

                        </VStack>

                        <VStack spacing={2} align='start'>
                            <Text color='white' mt={4}>
                                We are a family owned Mediterranean restaurant, focused on traditional recipes served with morden twist.
                            </Text>

                            <Button backgroundColor='brand.200'>Reserve a Table</Button>

                        </VStack>

                    </Box>

                    <Box
                        height='300px'
                        rounded='2xl'
                        width='full'
                        overflow='hidden'                    >
                        <Image
                            src={Food}
                            fit='cover'
                            align='center'
                            width='100%'
                            height='100%'
                        />
                    </Box>

                </Stack>



            </Container>

        </Box>
    )
}

export default Hero;