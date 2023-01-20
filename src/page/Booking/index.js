import React, { useReducer } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import BookingForm from '../../components/BookingForm'

const Booking = () => {

    const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const updateTimes = (state) => {
        return state
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    return (
        <Box as='main'>
            <Container>
                <Box as='section' my={8}>
                    <Heading as='h1' textAlign='center' >Reservation</Heading>
                    <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
                </Box>
            </Container >


        </Box >
    )
}

export default Booking