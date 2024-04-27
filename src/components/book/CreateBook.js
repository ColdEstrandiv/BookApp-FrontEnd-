import { API_URL } from "../../constants";
import { Button, Group, Center, Card, Anchor, TextInput, NumberInput } from '@mantine/core';
import { REACT_URL } from "../../constants";
import { isInRange, useForm } from '@mantine/form';


export const BookForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            title: '',
            author: '',
            pageCount: 0
        },
        validate: {
            pageCount: isInRange({ min: 1 })
        }
    })

    const submitBook = (values) => {

        console.log({values})

        fetch(`http://${API_URL}/book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: values.title,
                author: values.author,
                pageCount: values.pageCount
            })
        })
    }

    return (
        <Center>
            <Group  pt={150}>
                <Card w={400} pt={50} bg={'#f6f8fa'} padding={"lg"}>
                    <form onSubmit={form.onSubmit((values) => submitBook(values))}>
                        <TextInput
                            label="Title"
                            {...form.getInputProps('title')}
                        />
                        <TextInput
                            label="Author"
                            {...form.getInputProps('author')}
                        />
                        <NumberInput
                            w={200}
                            label="Page Count"
                            {...form.getInputProps('pageCount')}
                        />
                        <Group pt={10} pb={10} justify="center">
                            <Button type="submit"> Submit </Button>
                        </Group>
                    </form>
                    <Anchor ta={'center'} href={`http://${REACT_URL}/Books`} underline="hover" fz={25}>
                    Back to Books
                    </Anchor>
                </Card>
            </Group>
        </Center>
    )
}