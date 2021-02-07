import React from 'react'
import { Container, Item, Label, Header, Divider, Grid, Button } from 'semantic-ui-react'

export default function Project() {
    return (
        <Grid style={{ padding: "1% 0% 1% 0%", margin: "0%", width: "100%" }}>
            <Container >
                <Header as="h1" textAlign="center">
                    Projects
                <Divider />
                </Header>
                {/* MAKE TWO COLUMNS FOR SPACE */}
                <Grid centered columns={2} style={{ padding: "0% 5% 0% 5%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column >
                            <Item.Group >
                                <Item>
                                    <Item.Image src='https://picsum.photos/200/' />
                                    <Item.Content>
                                        <Item.Header >postr</Item.Header>
                                        <Item.Meta> 01/15/2021 </Item.Meta>
                                        <Item.Description>
                                            A social media website like twitter to post your thoughts. You can like and comment on anyone's
                                            post.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>MERN Stack</Label>
                                            <Label>GraphQL</Label>
                                            <Label>SemanticUI</Label>
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
                                        <Item.Header>Instagram Clone</Item.Header>
                                        <Item.Meta> 12/28/2020 </Item.Meta>
                                        <Item.Description>
                                            A cross platform clone of Instagram. You can post/take pictures, write comments, and add friends.
                                            It's a barebone project with currently no styling. I plan to implement aesthetic styles to the
                                            app in the future.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>React Native</Label>
                                            <Label>Redux</Label>
                                            <Label>Firebase</Label>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Item.Group>
                                <Item>
                                    <Item.Image src='https://picsum.photos/200/' />
                                    <Item.Content>
                                        <Item.Header>Clever Cart</Item.Header>
                                        <Item.Meta> 01/11/2021 </Item.Meta>
                                        <Item.Description>
                                            An iOS shopping app where customers can add/remove items from their carts. They can proceed to
                                            checkout which only empties the cart. Admins can add new items, increase the quantity of an
                                            existing item, or remove an item entirely.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>Swift</Label>
                                            <Label>RestAPI</Label>
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
                                        <Item.Header>AI Flappy Bird</Item.Header>
                                        <Item.Meta> 06/09/2020 </Item.Meta>
                                        <Item.Description>
                                            An AI that learns and teaches itself the popular game Flappy Bird.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>Python</Label>
                                            <Label>Pygame</Label>
                                            <Label>NEAT-python</Label>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Item.Group >
                                <Item>
                                    <Item.Image src='https://picsum.photos/200/' />
                                    <Item.Content>
                                        <Item.Header >postr</Item.Header>
                                        <Item.Meta> 01/15/2021 </Item.Meta>
                                        <Item.Description>
                                            A social media website like twitter to post your thoughts. You can like and comment on anyone's
                                            post.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>MERN Stack</Label>
                                            <Label>GraphQL</Label>
                                            <Label>SemanticUI</Label>
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
                                        <Item.Header>Instagram Clone</Item.Header>
                                        <Item.Meta> 12/28/2020 </Item.Meta>
                                        <Item.Description>
                                            A cross platform clone of Instagram. You can post/take pictures, write comments, and add friends.
                                            It's a barebone project with currently no styling. I plan to implement aesthetic styles to the
                                            app in the future.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>React Native</Label>
                                            <Label>Redux</Label>
                                            <Label>Firebase</Label>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Item.Group>
                                <Item>
                                    <Item.Image src='https://picsum.photos/200/' />
                                    <Item.Content>
                                        <Item.Header>Behavr</Item.Header>
                                        <Item.Meta> 07/19/20 </Item.Meta>
                                        <Item.Description>
                                            A cross platform app that asks a user q myriad of questions and collects data on their writing style.
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>React Native</Label>
                                            <Label>Machine Learning</Label>
                                            <Label>Firebase</Label>
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
                                        <Item.Header>Slingshot Website</Item.Header>
                                        <Item.Meta> 10/19/2020 </Item.Meta>
                                        <Item.Description>
                                            Worked on the automation portal for Slingshot's website
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Label>Typescript</Label>
                                            <Label>SemanticUI</Label>
                                            <Label>Google APIs</Label>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Grid>
    )
}
