/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Grid, Header, Icon, Image, Divider, Container } from 'semantic-ui-react';

import { bio, social } from "../constants/resumeData.json";

import taj from '../images/tajpic.png';

export default function AboutMe(props) {
    return (
        <Grid style={{ padding: "5% 0% 1% 0%", margin: "0%", width: "100%", height: '85vh', background: "#ebebeb" }}>
            <Container >
                <Header as="h1" textAlign='center' id={props.id}>
                    About Me
                <Divider />
                </Header>

                <Grid centered columns='equal' style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src={taj} verticalAlign='middle' />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Header as="h2">Hey, I'm Tajwar!</Header>
                            <p>
                                {bio.description}
                            </p>
                            <p>
                                {bio.coding}
                            </p>
                            <p>
                                {bio.contact}
                            </p>
                            <Grid.Row>
                                <Grid.Column>
                                    <a href={social.linkedin} target="_blank">
                                        <Icon name="linkedin" size="large" />
                                    </a>
                                    <a href={social.github} target="_blank">
                                        <Icon name="github square" size="large" />
                                    </a>
                                    <a href={`mailto:${ social.email }`} target="_blank">
                                        <Icon name="mail" size="large" />
                                    </a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>
        </Grid>
    );
}
