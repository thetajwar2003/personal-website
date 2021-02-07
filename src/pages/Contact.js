/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Grid, Container, Header, Divider, Form, TextArea } from 'semantic-ui-react'

export default function Contact() {
    return (
        <Grid style={{ padding: "1% 0% 10% 0%", margin: "0%", width: "100%", background: "#ebebeb" }}>
            <Container>
                <Header as="h1" textAlign="center">
                    Let's Get In Touch
                    <Divider />
                    <Header.Subheader>Drop me an e-mail at
                        <a href="mailto:rahmantajwar131@gmail.com" target="_blank">
                            {" "}rahmantajwar131@gmail.com{" "}
                        </a>
                         or fill out this form below and I'll reply to you soon!
                    </Header.Subheader>
                </Header>


                <Form>
                    <Grid columns={2} style={{ padding: "0% 0% 1% 0%" }}>
                        <Grid.Row>
                            <Grid.Column>
                                <Form.Field>
                                    <label>Name</label>
                                    <input placeholder='Your Name' />
                                </Form.Field>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input placeholder='Your E-mail Address' />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                    <Form.Field>
                        <label>Message</label>
                        <TextArea placeholder="Your Message" style={{ minHeight: 100 }} />
                    </Form.Field>
                </Form>
            </Container>
        </Grid>
    )
}
