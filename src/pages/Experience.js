import React from 'react'
import { Grid, Container, Header, Divider, Card, Image, Button, Icon, CardDescription } from 'semantic-ui-react'

import slingshot from '../images/slingshot.png';
import hkp from '../images/hkp.png';

export default function Experience() {
    return (
        <Grid style={{ padding: "1% 0% 1% 0%", margin: "0%", width: "100%", background: "#ebebeb" }}>
            <Container fluid>
                <Header as="h1" textAlign="center">
                    Experience
                <Divider />
                </Header>

                <Grid celled='internally' centered columns={2} style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }}>
                    <Grid.Row>
                        <Grid.Column centered >
                            {/* <Header as="h2">
                                HKP Solutions
                                <Header.Subheader>3 months</Header.Subheader>
                            </Header> */}
                            <Card color="blue" fluid>
                                <Card.Content>
                                    <Image
                                        floated="left"
                                        size="mini"
                                        src={hkp}
                                    />
                                    <Card.Header>HKP Solutions</Card.Header>
                                    <Card.Meta>3 months</Card.Meta>
                                    <Card.Description>
                                        Housekeeping Payment Solutions LLC a mobile app development company, focused on developing scalable solutions for hotel chains to increase labor efficiency, 
                                        improve employee satisfaction, and enhance the customer experience. 
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button color="blue" as="a" href="https://www.linkedin.com/company/hkpsolutions/" target="_blank">
                                        <Icon name="linkedin" />
                                        Linkedin
                                    </Button>
                                    <Button color="instagram" as="a" href="https://www.hkpsolutions.com/#/" target="_blank">
                                        <Icon name="world" />
                                        Website
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column centered>
                            <Header as="h3" textAlign="center">
                                iOS Developer Intern
                            <Header.Subheader>Internship | December 2020 - Present</Header.Subheader>
                            </Header>
                        - Improving <b>hotel housekeeping payment management system</b> using SwiftUI. <br />
                        - Designed <b>user experience frameworks</b> applicable to multiple screen sizes, including both iPad and iPhone. <br />
                        - <b>Integrated internally built APIs</b> into development project. <br />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column centered >
                            <Card color="orange" fluid>
                                <Card.Content>
                                    <Image
                                        floated="left"
                                        size="mini"
                                        src={slingshot}
                                    />
                                    <Card.Header>Slingshot Mentoring</Card.Header>
                                    <Card.Meta>3 months</Card.Meta>
                                    <CardDescription>
                                        Slingshot Mentoring is a global startup incubator that provides a free mentored internship program, and is focused on providing high school students to 
                                        industry-level internship, access to valuable college prep resources, and a lifelong network with mentors who graduated from the world's most prestigious
                                        CS universities. 
                                    </CardDescription>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button style={{background:"#2d8c8c", color:"white"}} as="a" href="https://www.linkedin.com/company/slingshot-mentoring/" target="_blank">
                                        <Icon name="linkedin" />
                                        Linkedin
                                    </Button>
                                    <Button style={{background:"#e6825a", color:"white"}} as="a" href="https://slingshotmentoring.com/" target="_blank">
                                        <Icon name="world" />
                                        Website
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column centered >
                            <Grid.Row>
                                <Header as="h3" textAlign="center">
                                    Software Engineer
                            <Header.Subheader>Part-time | October 2020 - Present</Header.Subheader>
                                </Header>
                        - Developed <b>automation portal</b> using <b>React.js and React.tsx.</b><br />
                        - Integrated <b>Firebase cloud functions</b> using <b>Google Drive and Gmail APIs.</b><br />
                        - <b>Administered, supported and monitored</b> portal functionality by proactively <b>resolving database/portal bugs.</b> <br />
                        - <b>Revised, modularized, and updated</b> old code bases to modern development standards.<br />
                        - Designed <b>intuitive graphical user interfaces</b> using knowledge of <b>serial communications and database design</b> to <b>improve user experience.</b><br />
                            </Grid.Row>
                            <Divider />
                            <Grid.Row>
                                <Header as="h3" textAlign="center">
                                    Software Developer/Machine Learning Intern
                            <Header.Subheader>Internship | July 2020 - October 2020</Header.Subheader>
                                </Header>
                                - Worked to <b>increase personal device security</b> by providing continuous than one-time authentication to the user.<br />
                                - Achieved <b>97% accuracy</b> on novel <b>ML text classifying models</b> created to uniquely identify users based on their <b>stylometric features.</b><br />
                                - Developed a cross-platform app using <b>React-Native</b> and <b>Firebase</b> to collect stylometric data on which <b>research was conducted and models were trained.</b><br />
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Grid>
    )
}
