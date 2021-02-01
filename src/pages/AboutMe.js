import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Header, Icon, Image } from 'semantic-ui-react'

import taj from './images/tajpic.jpg';

export default function AboutMe() {
    return (
        <Grid centered columns={3} style={{ padding: "5% 0% 5% 0%", margin: "0%", width: "100%" }} verticalAlign="middle">
            <Grid.Row>
                <Grid.Column />
                <Grid.Column>
                    <Header as="h2">About Me</Header>
                </Grid.Column>
                <Grid.Column />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Image src={taj} size="small" />
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">Hey, I'm Tajwar!</Header>
                    <p>I'm a senior at Bronx Science who loves combining programming and math to create creative real-world applications. </p>
                    <Grid.Row>
                        <Grid.Column>
                            <a href="https://www.linkedin.com/in/tajwar-rahman-aa30851a3/">
                                <Icon name="linkedin" size="large"/>
                            </a>
                            <a href="https://github.com/thetajwar2003">
                                <Icon name="github square" size="large"/>
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column>
                    <p>Free time</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
