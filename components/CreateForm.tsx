import {Heading, Input, Textarea, Checkbox, CheckboxGroup, InputGroup, InputRightAddon, Button} from '@chakra-ui/react';

function CreateForm({setTitle, setDescription, isPaid, setFee, uploadToFirebase, setIsPaid, setSeats}: any) {
    return (
        <>
            <Heading m={2}>Create an event</Heading>
				<Input m={2} onChange={(e) => setTitle(e.target.value)} placeholder={"Title"} />
				<Textarea m={2} onChange={e => setDescription(e.target.value)} placeholder={"Description"} />
				<Input onChange={e => setSeats(e.target.value)} placeholder={"Seats"} />
				<CheckboxGroup>
				<Checkbox m={2} defaultIsChecked={true} onChange={e => setIsPaid(!isPaid)}> Paid Ticket</Checkbox>
				</CheckboxGroup>
				{isPaid ? (
					<InputGroup m={2}>
						<Input onChange={e => setFee(e.target.value)} placeholder={"Amount"} />
						<InputRightAddon >MATIC</InputRightAddon>
					</InputGroup>
					) : null }
				<Button m={2} variant="outline" p={4} onClick={uploadToFirebase}>Create Event</Button>

        </>
    )
}

export default CreateForm