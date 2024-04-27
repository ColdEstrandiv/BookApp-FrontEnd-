import { Button, Group, Center, Card, Anchor, TextInput, NumberInput } from '@mantine/core';
import { REACT_URL } from "../../constants";
import { API_URL } from "../../constants"
import { useParams } from "react-router-dom"
import { isInRange, useForm, hasLength } from "@mantine/form"

export const ReadingForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            pageCount: 0,
            readTime: ''
        },
        validate: {
            pageCount: isInRange({ min: 1 }, 'Must be atleast 1 page'),
            readTime: hasLength({ max: 5 }, 'Time in hh:mm <00:00>')
        }
    })

    let {bookProgressId} = useParams()

    const submitRead = (values) => {

        console.log({values})
        fetch(`http://${API_URL}/bookProgress/${bookProgressId}/read`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pageCount: values.pageCount,
                readTime: values.readTime
            })
        })
    }

    return(
        <Center>
            <Group  pt={150}>
                <Card w={250} pt={50} bg={'#f6f8fa'} padding={"lg"}>
                    <form onSubmit={form.onSubmit((values) => submitRead(values))}>
                        <NumberInput
                            defaultValue={0}
                            placeholder="Pages Read"
                            label="Pages Count"
                            {...form.getInputProps('pageCount')}
                        />
                        <TextInput
                        label="Read Time"
                        placeholder='00:00'
                        {...form.getInputProps('readTime')}
                        />
                        <Group pt={10} pb={10} justify="center">
                            <Button type="submit"> Submit </Button>
                        </Group>
                    </form>
                    <Anchor ta={'center'} href={`http://${REACT_URL}/bookProgress/${bookProgressId}`} underline="hover" fz={25}>
                    Back to Book Progress
                    </Anchor>
                </Card>
            </Group>
        </Center>
    )
}