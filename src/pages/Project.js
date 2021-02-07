import React from 'react'
import { Container, Item, Label, Header, Divider, Grid } from 'semantic-ui-react'

export default function Project() {
    return (
        <Container>
            <Header as="h1" textAlign="center">
                Projects
                <Divider />
            </Header>
            {/* MAKE TWO COLUMNS FOR SPACE */}
            <Grid centered columns={3} style={{ width: "100%" }} verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group >
                            <Item>
                                <Item.Image src='https://picsum.photos/200/' />
                                <Item.Content>
                                    <Item.Header as='a'>Project name</Item.Header>
                                    <Item.Meta> Date</Item.Meta>
                                    <Item.Description>
                                        THis is the desc
                    </Item.Description>
                                    <Item.Extra>
                                        <Label>React</Label>
                                        <Label>TypeScript</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image src='https://picsum.photos/200/' />
                                <Item.Content>
                                    <Item.Header as='a'>Project name</Item.Header>
                                    <Item.Meta> Date</Item.Meta>
                                    <Item.Description>
                                        THis is the desc
                    </Item.Description>
                                    <Item.Extra>
                                        <Label>React</Label>
                                        <Label>TypeScript</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image src='https://picsum.photos/200/' />
                                <Item.Content>
                                    <Item.Header as='a'>Project name</Item.Header>
                                    <Item.Meta> Date</Item.Meta>
                                    <Item.Description>
                                        THis is the desc
                    </Item.Description>
                                    <Item.Extra>
                                        <Label>React</Label>
                                        <Label>TypeScript</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>˝
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </Container>
    )
}
