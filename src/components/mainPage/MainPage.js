// import { Link } from "react-router-dom";
import { Anchor, Container, Card, useMantineTheme } from "@mantine/core"
import { REACT_URL } from "../../constants";

export const MainPage = () => {

    const theme = useMantineTheme()

    return(
        <Container 
        pt={50} 

        >
            <Card 
            ta={"center"}
            shadow="sm"
            radius={"sm"}
            padding={""} 
            withBorder>
                <Anchor href={`http://${REACT_URL}/users`} underline="hover" fz={30}>
                Users
                </Anchor>
                <br/>
                <Anchor href={`http://${REACT_URL}/Books`} underline="hover" fz={30}>
                Books
                </Anchor>     
            </Card>
        </Container>
    )
}