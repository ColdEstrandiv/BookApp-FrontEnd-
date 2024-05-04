import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { Button, Center, TextInput, Card, Group, Anchor } from "@mantine/core";
import { hasLength, useForm } from '@mantine/form';
import { REACT_URL } from "../../constants";

export const LibraryForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: ''
        },
        validate: {
            name: hasLength({ min: 3, max: 20}, 'Must be  3-20 characters'),
        }
    })
    
    let {userId} = useParams()

    const submitLibrary = (values) => {
        
        console.log({values})

        fetch("http://" + API_URL + `/user/${userId}/library`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: values.name
            })
        })
    }

    return(
        <Center>
        <Group pt={150}>
            <Card w={300} padding={"lg"} bg={'#f6f8fa'}>
                <form onSubmit={form.onSubmit((values) => submitLibrary(values))}>
                    <TextInput
                    label="Library Name"
                    placeholder="3-20 characters"
                    {...form.getInputProps('name')}
                    />
                    <Group pt={10} pb={10} justify="center">
                        <Button type="submit"> Submit </Button>
                        <Link to={`/user/${userId}`}>
                            Back to User
                        </Link>
                    </Group>
                </form>
            </Card>
        </Group>
        </Center> 
    )
}