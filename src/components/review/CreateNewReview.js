import { API_URL } from "../../constants";
import { Button, Group, Center, Card, Anchor, Textarea } from '@mantine/core';
import { REACT_URL } from "../../constants";
import { hasLength, useForm } from '@mantine/form';
import { useParams } from "react-router-dom";

export const ReviewForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            content: ''
        },
        validate: {
            content: hasLength({ min: 10 }, 'Must be atleast 10 characters'),
            content: hasLength({ max: 200 }, 'Must be under 200 characters')
        }
    })

    let {userId} = useParams()
    let {bookId} = useParams()

    const submitReview= (values) => {

        console.log({values})

        fetch(`http://"${API_URL}/user/${userId}/book/${bookId}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: values.content
            })
        })
    }

    return(
        <Center>
            <Group  pt={150}>
                <Card w={500} pt={50} bg={'#f6f8fa'} padding={"lg"}>
                    <form onSubmit={form.onSubmit((values) => submitReview(values))}>
                        <Textarea
                            autosize
                            minRows={3}
                            label="Review"
                            placeholder="10-200 characters"
                            {...form.getInputProps('content')}
                        />
                        <Group pt={10} pb={10} justify="center">
                            <Button type="submit"> Submit </Button>
                        </Group>
                    </form>
                    <Anchor ta={'center'} href={`http://${REACT_URL}/user/${userId}/reviews`} underline="hover" fz={25}>
                    Back to User reviews
                    </Anchor>
                </Card>
            </Group>
        </Center>
    )
}