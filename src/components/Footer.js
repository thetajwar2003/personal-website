/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Grid, Container, Icon, Button } from 'semantic-ui-react';

import { social } from '../constants/resumeData.json';

export default function Footer() {
    return (
        <Grid style={{ padding: "0% 0% 2% 0%", margin: "0%", width: "100%", background: "#232323" }}>
            <Container >
                <Grid centered columns='equal' style={{ padding: "0% 5% 0% 5%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle" textAlign="right">
                            <Button as="a" href={social.linkedin} target="_blank" color="linkedin" >
                                <Icon name="linkedin" /> Linkedin
                            </Button>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle" textAlign="center">
                            <Button as="a" href={social.github} target="_blank" style={{ color: "#602693" }} >
                                <Icon name="github" /> Github
                            </Button>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle" textAlign="left">
                            <Button as="a" href={`mailto:${ social.email }`} target="_blank" color="google plus" >
                                <Icon name="mail" /> Gmail
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <p style={{ color: "#ffffff" }}> © 2021 Tajwar Rahman</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Grid>
    );
}
