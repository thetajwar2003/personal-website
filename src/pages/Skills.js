import React from 'react'
import { Grid, Container, Header, Divider } from 'semantic-ui-react'

export default function Skills() {
    return (
        <Grid style={{ padding: "1% 0% 1% 0%", margin: "0%", width: "100%" }}>
            <Container>
                <Header as="h1" textAlign="center">
                    Skills
                <Divider />
                </Header>

                <Grid centered columns={1} style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    <Grid.Column centered verticalAlign="middle">
                        <p>List Skills</p>
                    </Grid.Column>
                </Grid>
            </Container>
        </Grid>
    )
}
