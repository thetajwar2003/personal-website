/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import { Grid, Container, Header, Divider, Form, TextArea, Button } from 'semantic-ui-react'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(e) {
        // fill in later from spree
    }

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


                <Form onSubmit={handleSubmit}>
                    <Grid columns={2} style={{ padding: "0% 0% 1% 0%" }}>
                        <Grid.Row>
                            <Grid.Column>
                                <Form.Field>
                                    <label>Name</label>
                                    <input name="name" placeholder='Your Name' onChange={e => setName(e.target.value)} value={name} />
                                </Form.Field>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input name="email" placeholder='Your E-mail Address' onChange={e => setEmail(e.target.value)} value={email} />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                    <Form.Field>
                        <label>Message</label>
                        <TextArea name="message" placeholder="Your Message" style={{ minHeight: 100 }} onChange={e => setMessage(e.target.value)} value={message} />
                    </Form.Field>

                    <Button size="small" type="submit" > Send </Button>
                </Form>
            </Container>
        </Grid>
    )
}
