import { API_URL } from "../../constants"
import { TextInput, Button, Group, Center, Card, Anchor, PasswordInput } from '@mantine/core';
import { REACT_URL } from "../../constants";
import { hasLength, isEmail, useForm } from '@mantine/form';

export const UserForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        },
        validate: {
            username: hasLength({ min: 3 }, 'Must be at least 3 characters'),
            email: isEmail('Invalid email'),
            password: hasLength({ min: 3 }, 'Must be at least 3 characters')
          }
    })

    const submitUser = (values) => {
        console.log(values)
        fetch("http://" + API_URL + "/user", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.username,
                email: values.email,
                password: values.password
            })
        })
    }

    return(
        <Center>
            <Group  pt={150}>
                <Card w={300} padding={"lg"} bg={'#f6f8fa'}>
                    <form onSubmit={form.onSubmit((values) => submitUser(values))}>
                        <TextInput
                            label="First Name"
                            placeholder="First name"
                            {...form.getInputProps('firstName')}
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Last name"
                            {...form.getInputProps('lastName')}
                        />
                        <TextInput
                            withAsterisk
                            label="Username"
                            placeholder="Username"
                            {...form.getInputProps('username')}
                        />
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="yourEmail@example.com"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            withAsterisk
                            label="Password"
                            placeholder="password"
                            {...form.getInputProps('password')}
                        />

                        <Group pt={10} pb={10} justify="center">
                        <Button type="submit"> Submit </Button>
                        </Group>
                    </form>
                    <Anchor ta={'center'} href={`http://${REACT_URL}/users`} underline="hover" fz={30}>
                    Back to Users
                    </Anchor>
                </Card>
            </Group>
        </Center>
    )
}