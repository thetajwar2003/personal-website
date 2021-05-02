import React from 'react';
import { Grid, Container, Header, Divider, Card, Image, Button, Icon } from 'semantic-ui-react';

import { experience } from "../constants/resumeData.json";
import { getImage } from '../constants/ImageHandler';


export default function Experience(props) {

    return (
        <Grid style={{ padding: "5% 0% 5% 0%", margin: "0%", width: "100%", background: "#ebebeb" }} >
            <Container>
                <Header as="h1" textAlign="center" id={props.id}>
                    Experience
                <Divider />
                </Header>

                <Grid celled='internally' centered columns={2} style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} fl>
                    {experience.map(function (job, index) {
                        return (
                            <Grid.Row>
                                <Grid.Column centered>
                                    <Card color={job.cardColor} fluid>
                                        <Card.Content>
                                            <Image
                                                floated="left"
                                                size="mini"
                                                src={getImage(job.company)}
                                            />
                                            <Card.Header>{job.company}</Card.Header>
                                            <Card.Meta>{job.timeSpent}</Card.Meta>
                                            <Card.Description>{job.companyDesc}</Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button style={{ background: job.linkedinColor, color: "white" }} as="a" href={job.linkedin} target="_blank">
                                                <Icon name="linkedin" />
                                                Linkedin
                                            </Button>
                                            <Button style={{ background: job.websiteColor, color: "white" }} as="a" href={job.website} target="_blank">
                                                <Icon name="world" />
                                                Website
                                            </Button>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                                <Grid.Column centered>
                                    {job.jobs.map(function (work, index) {
                                        return (
                                            <>
                                                <Grid.Row>
                                                    <Header as="h3" textAlign="center">
                                                        {work.position}
                                                        <Header.Subheader><b>{work.type}</b> | {work.date}</Header.Subheader>
                                                    </Header>
                                                    {work.desc.map(function (lines, index) {
                                                        return index === work.desc.length - 1 ? lines : <React.Fragment>{lines}<br /></React.Fragment>;
                                                    })}
                                                </Grid.Row>
                                                <Divider hidden />
                                            </>
                                        );
                                    })}
                                </Grid.Column>
                            </Grid.Row>
                        );
                    })}
                </Grid>
            </Container>
        </Grid>
    );
}
