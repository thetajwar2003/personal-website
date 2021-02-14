/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import { Container, Item, Label, Header, Divider, Grid, Button, Modal, Image } from 'semantic-ui-react'

import detailsOn from '../constants/projectDetails';

export default function Project() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({
        Name: "",
        Date: "",
        Meta: "",
        Desc: "",
        Tags: [],
    });
    const proj = new detailsOn();
    return (
        <Grid style={{ padding: "5% 0% 5% 0%", margin: "0%", width: "100%"}}>
            <Container >
                <Header as="h1" textAlign="center">
                    Projects
                <Divider />
                </Header>
                <Grid centered columns={2} style={{ padding: "0% 5% 0% 5%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column >
                            <Item.Group >
                                <Item >
                                    <Item.Image src={proj.postr().Image} rounded/>
                                    <Item.Content>
                                        <Item.Header >{proj.postr().Name}</Item.Header>
                                        <Item.Meta> {proj.postr().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.postr().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.postr);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.postr().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>

                        <Grid.Column>
                            <Item.Group>
                                <Item>
                                    <Item.Image src={proj.insta().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.insta().Name}</Item.Header>
                                        <Item.Meta> {proj.insta().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.insta().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.insta);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.insta().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
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
                                    <Item.Image src={proj.agora().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.agora().Name}</Item.Header>
                                        <Item.Meta> {proj.agora().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.agora().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.agora);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.agora().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                        <Grid.Column>
                            <Item.Group>
                                <Item>
                                    <Item.Image src={proj.flappyBird().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.flappyBird().Name}</Item.Header>
                                        <Item.Meta> {proj.flappyBird().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.flappyBird().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.flappyBird);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.flappyBird().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
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
                                    <Item.Image src={proj.atm().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.atm().Name}</Item.Header>
                                        <Item.Meta> {proj.atm().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.atm().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.atm);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.atm().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>

                        <Grid.Column>
                            <Item.Group>
                                <Item>
                                    <Item.Image src={proj.neuralNets().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.neuralNets().Name}</Item.Header>
                                        <Item.Meta> {proj.neuralNets().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.neuralNets().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.neuralNets);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.neuralNets().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
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
                                    <Item.Image src={proj.googleAssistant().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.googleAssistant().Name}</Item.Header>
                                        <Item.Meta> {proj.googleAssistant().Date} </Item.Meta>
                                        <Item.Description>
                                            {proj.googleAssistant().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.googleAssistant);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                        <Item.Extra>
                                            {proj.googleAssistant().Tags.map(function (tag, index) {
                                                if (index < 3) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                }
                                            })}
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                        <Grid.Column>
                            <Item.Group>
                                <Item>
                                    <Item.Image src={proj.otherProjects().Image} />
                                    <Item.Content>
                                        <Item.Header >{proj.otherProjects().Name}</Item.Header>
                                        <Item.Meta> Various Dates </Item.Meta>
                                        <Item.Description>
                                            {proj.otherProjects().Meta}
                                            <Button size="small" style={{
                                                padding: "0%", color: "#7e7e7e",
                                                background: "none", border: "none", textDecoration: "underline"
                                            }} onClick={() => {
                                                setShowModal(true);
                                                setSelectedProject(proj.otherProjects);
                                            }}>
                                                ...more
                                            </Button>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <Modal
                dimmer={'blurring'}
                closeOnDimmerClick={false}
                closeIcon={{ style: { top: '1.0535rem', right: '1rem' }, color: 'black', name: 'close' }}
                open={showModal}
                onClose={() => setShowModal(false)}
                onOpen={() => setShowModal(true)}
                centered style={{
                    width: "75%",
                }}
                size="small"
            >
                <Header as="h1">
                    {selectedProject.Name}
                </Header>
                {selectedProject.Name === "Practical Projects" ? (

                    <Modal.Content >
                        <Item.Group>
                            {selectedProject.Projects.map(function (project, index) {
                                return (
                                    <Item>
                                        <Image size="tiny" src={project.Image} wrapped style={{ padding: "0%", margin: "0%" }} floated="left"/>
                                        <Item.Content>
                                            <Header as="h3">
                                                {project.Name}
                                                <Header.Subheader>{project.Date}</Header.Subheader>
                                            </Header>
                                            <Item.Description>{project.Meta}</Item.Description>
                                            <Item.Extra>
                                                {project.Tags.map(function (tag, index) {
                                                    return (
                                                        <Label>{tag}</Label>
                                                    )
                                                })}
                                            </Item.Extra>
                                        </Item.Content>
                                    </Item>
                                )
                            })}
                        </Item.Group>
                    </Modal.Content>
                ) : (
                        <Modal.Content image>
                            <Image size="medium" src={selectedProject.Image} wrapped style={{ padding: "0%", margin: "0%" }} floated="left"/>
                            <Container>
                                <Header>Full Description:</Header>
                                {selectedProject.Desc}
                                <Divider hidden />
                                <Item.Extra>
                                    {selectedProject.Tags.map(function (tag, index) {
                                        return (
                                            <Label>{tag}</Label>
                                        )
                                    })}
                                </Item.Extra>
                            </Container>
                        </Modal.Content>
                    )}
            </Modal>
        </Grid>
    )
}
