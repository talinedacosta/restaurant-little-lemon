import React from 'react'
import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from '@chakra-ui/react'

const BookingForm = ({ availableTimes, updateTimes }) => {
    const availableOccasion = ['Birthday', 'Anniversary'];

    const [date, setData] = React.useState(new Date().toISOString().substring(0, 10));
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState();
    const [time, setTime] = React.useState();

    const handleDateChange = (e) => {
        const value = e.target.value
        setData(value);
        updateTimes({ type: 'newTime', payload: new Date(value) })
    }

    return (
        <Box as='form'>
            <FormControl my={4} isRequired>
                <FormLabel>Choose date</FormLabel>
                <Input type='date' value={date} onChange={handleDateChange} />
            </FormControl>

            <FormControl my={4} isRequired>
                <FormLabel>Choose time</FormLabel>
                <Select value={time} onChange={(e) => { setTime(e.target.value) }} >
                    {availableTimes.times.map((item, index) => {
                        return (
                            <option value={item} key={index}>{item}</option>
                        )
                    })}
                </Select>
            </FormControl>

            <FormControl my={4} isRequired>
                <FormLabel>Choose guests</FormLabel>
                <NumberInput min={1} max={10} value={guests} onChange={(e) => { setGuests(e.target.value) }} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl my={4} isRequired>
                <FormLabel>Occasion</FormLabel>
                <Select value={occasion} onChange={(e) => { setOccasion(e.target.value) }} >
                    {availableOccasion.map((item, index) => {
                        return (<option key={index} value={item}>{item}</option>)
                    })}
                </Select>
            </FormControl>
            <Button type='submit' variant='brandThick' w='full' my={4}>
                Make a reservation
            </Button>
        </Box>
    )
}

export default BookingForm