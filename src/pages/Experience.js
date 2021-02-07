import React from 'react'
import { Grid, Container, Header, Divider } from 'semantic-ui-react'

export default function Experience() {
    return (
        <Container>
            <Header as="h1" textAlign="center">
                Experience
                <Divider />
            </Header>

            <Grid centered columns={2} style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column centered verticalAlign="middle">
                        <Header as="h2">HKP Solutions</Header>
                    </Grid.Column>
                    <Grid.Column centered>
                        <Header as="h3" textAlign="center">
                            iOS Developer Intern
                            <Header.Subheader>Internship | December 2020 - Present</Header.Subheader>
                        </Header> <br />
                        - Doing stuff <br/>
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row>
                    <Grid.Column centered verticalAlign="middle">
                        <Header as="h2">Slingshot Mentoring</Header>
                    </Grid.Column>
                    <Grid.Column centered >
                        <Header as="h3" textAlign="center">
                            Software Engineer
                            <Header.Subheader>Part-time | October 2020 - Present</Header.Subheader>
                        </Header> <br />
                        - Developed automation portal using React<br />
                        - Integrated Firebase cloud functions using Google Drive and Gmail APIs<br />
                        - Updated interview process by writing take-home projects<br />
                        - Revised, modularized, and updated old code bases to modern development standards<br />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column />
                    <Grid.Column centered >
                        <Header as="h3" textAlign="center">
                            Software Developer/Machine Learning Intern
                            <Header.Subheader>Internship | July 2020 - October 2020</Header.Subheader>
                        </Header> <br />
                    - Worked to increase personal device security by providing continuous than one-time authentication to the user.<br />
                    - Achieved 98% accuracy on novel ML text classifying models created to uniquely identify users based on their 
                        stylometric features.<br/>
                    - Developed a cross-platform app using React-Native and Firebase to collect stylometric data on which research was 
                        conducted and models were trained.<br/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
