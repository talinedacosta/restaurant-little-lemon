import React, { useReducer } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import BookingForm from '../../components/BookingForm'
import { fetchAPI, submitAPI } from '../../api/booking'

const initialState = {
    times: fetchAPI(new Date())
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'newTime':
            return { times: fetchAPI(action.payload) }
        default: throw new Error();

    }
}

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(reducer, initialState)

    return (
        <Box as='main'>
            <Container>
                <Box as='section' my={8}>
                    <Heading as='h1' textAlign='center' >Reservation</Heading>
                    <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitAPI} />
                </Box>
            </Container>
        </Box >
    )
}

export default Booking