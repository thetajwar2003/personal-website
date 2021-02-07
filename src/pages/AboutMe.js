/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Grid, Header, Icon, Image, Divider, Container } from 'semantic-ui-react'

// import taj from './images/tajpic.jpg';

export default function AboutMe() {
    return (
        <Container >
            <Header as="h1" textAlign='center'>
                About Me
                <Divider />
            </Header>

            <Grid centered columns='equal' style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">

                <Grid.Row>
                    <Grid.Column>
                        <Image src='https://picsum.photos/200/300' size="small" />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4">Hey, I'm Tajwar!</Header>
                        <p>I'm a senior at Bronx Science who loves combining programming and math to create creative real-world applications. </p>
                        <Grid.Row>
                            <Grid.Column>
                                <a href="https://www.linkedin.com/in/tajwar-rahman-aa30851a3/" target="_blank">
                                    <Icon name="linkedin" size="large" />
                                </a>
                                <a href="https://github.com/thetajwar2003" target="_blank">
                                    <Icon name="github square" size="large" />
                                </a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <p>Free time</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
