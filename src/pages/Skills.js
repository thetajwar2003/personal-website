import React from 'react'
import { Grid, Container, Header, Divider, Item } from 'semantic-ui-react'
import { FaPython, FaJava, FaReact, FaSwift, FaDatabase, FaCogs } from 'react-icons/fa'
export default function Skills() {
    return (
        <Grid style={{ padding: "1% 0% 1% 0%", margin: "0%", width: "100%" }}>
            <Container>
                <Header as="h1" textAlign="center">
                    Skills
                <Divider />
                </Header>

                <Grid centered columns={2} style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    <Grid.Column >
                        <Item.Group>
                            <Item>
                                <FaPython size={70} />
                                <Item.Content style={{ padding: "0% 0% 0% 5%" }}>
                                    <Header as="h2">Python</Header>
                                    <Item.Description>Machine Learning, Data Science, Regression, Classification, Clustering</Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <FaJava size={70} />
                                <Item.Content style={{ padding: "0% 0% 0% 5%" }}>
                                    <Header as="h2">Java</Header>
                                    <Item.Description>Object-Oriented, JDBC, Lambdas, Data Structures, Algorithms</Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <FaReact size={70} />
                                <Item.Content style={{ padding: "0% 0% 0% 5%" }}>
                                    <Header as="h2">React</Header>
                                    <Item.Description>JavaScript, TypeScript, Node.js, Full Stack</Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <FaSwift size={70} />
                                <Item.Content style={{ padding: "0% 0% 0% 5%" }}>
                                    <Header as="h2">SwiftUI</Header>
                                    <Item.Description>APIs, CreateML, CoreData, UI/UX Design</Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <FaDatabase size={70} />
                                <Item.Content style={{ padding: "0% 0% 0% 5%" }}>
                                    <Header as="h2">Databases</Header>
                                    <Item.Description>MySQL, SQLite, PostgreSQL, Firebase, MongoDB</Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <FaCogs size={70} />
                                <Item.Content style={{ padding: "0% 0% 0% 5%" }}>
                                    <Header as="h2">Other Software/Frameworks </Header>
                                    <Item.Description>C#/C++, GoLang, Kotlin, Git, .NET, Heroku</Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid>
            </Container>
        </Grid>
    )
}
