/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Grid, Header, Icon, Image, Divider, Container } from 'semantic-ui-react'

import taj from '../images/tajpic.png';

export default function AboutMe() {
    return (
        <Grid style={{ padding: "1% 0% 1% 0%", margin: "0%", width: "100%", background: "#ebebeb" }}>
            <Container >
                <Header as="h1" textAlign='center'>
                    About Me
                <Divider />
                </Header>

                <Grid centered columns='equal' style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src={taj} verticalAlign='middle'/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Header as="h2">Hey, I'm Tajwar!</Header>
                            <p>
                                I'm a senior at Bronx Science who loves combining programming and math to create creative 
                                real-world applications. I'm attentive to detail, task-oriented and eager to contribute to team 
                                I thrive in environments that allow me to develop my skills on a continuous basis. I'm dedicated 
                                to growing as a developer and as an individual. 
                            </p>
                            <p>
                                During my free time I love to either visit the park and play basketball or help cook delicious
                                meals. I'm also constantly trying to improve the Machine Learning Club in my school by creating
                                lesson plans and bringing in guest speakers. Prior to the pademic I would often volunteer in an
                                events that the Key Club provided every weekend.  
                            </p>
                            <p>
                                You can reach out to me through email or just message me on Linkedin!
                            </p>
                            <Grid.Row>
                                <Grid.Column>
                                    <a href="https://www.linkedin.com/in/tajwar-rahman-aa30851a3/" target="_blank">
                                        <Icon name="linkedin" size="large" />
                                    </a>
                                    <a href="https://github.com/thetajwar2003" target="_blank">
                                        <Icon name="github square" size="large" />
                                    </a>
                                    <a href="mailto:rahmantajwar131@gmail.com" target="_blank">
                                        <Icon name="mail" size="large" />
                                    </a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </Container>
        </Grid>
    )
}
