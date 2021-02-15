/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import { Grid, Container, Header, Divider, Form, TextArea, Button, Message } from 'semantic-ui-react'
import emailjs from 'emailjs-com';

export default function Contact(props) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [sentMail, setSentMail] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_qlk090c', 'template_r5q2tvt', e.target, 'user_seAyLCJNIlX5cKn1Fc0Z0')
        .then((result) => {
            console.log(result.text);
            setSentMail(true);
        }, (error) => {
            console.log(error.text);
        });
        setEmail('');
        setMessage('');
        setName('');
    }
    // service_qlk090c
    return (
        <Grid style={{ padding: "5% 0% 10% 0%", margin: "0%", width: "100%", height: '81vh', background: "#ebebeb", }} >
            <Container>
                <Header as="h1" textAlign="center" id={props.id}>
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
                                    <input name="sender_email" placeholder='Your E-mail Address' onChange={e => setEmail(e.target.value)} value={email} />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                    <Form.Field>
                        <label>Message</label>
                        <TextArea name="message" placeholder="Your Message" style={{ minHeight: 100 }} onChange={e => setMessage(e.target.value)} value={message} />
                    </Form.Field>

                    <Button size="small" type="submit" > Send </Button>

                    {sentMail ? 
                        (<Message
                            positive
                            icon="inbox"
                            header="Your email has been sent!"
                            content="Thank you for sending me an email. I'll respond to you as soon as possible!"
                        />) : null}
                </Form>
            </Container>
        </Grid>
    )
}
