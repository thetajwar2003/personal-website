/* eslint-disable array-callback-return */
import React from 'react';
import { Grid, Container, Header, Divider, Item } from 'semantic-ui-react';

import { skills } from "../constants/resumeData.json";
import { getSkill } from '../constants/ImageHandler';

export default function Skills(props) {
    return (
        <Grid style={{ padding: "5% 0% 1% 0%", margin: "0%", width: "100%", height: '85vh' }} >
            <Container>
                <Header as="h1" textAlign="center" id={props.id}>
                    Skills
                <Divider />
                </Header>

                <Grid centered columns={2} style={{ padding: "0% 10% 0% 10%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    <Grid.Column >
                        <Item.Group>
                            {skills.map(function (skill, index) {
                                if (index < skills.length / 2) {
                                    return (
                                        <Item>
                                            {getSkill(skill.name)}
                                            <Item.Content style={{ padding: "0% 0% 20% 10%" }}>
                                                <Header as="h2">{skill.name}</Header>
                                                <Item.Description>{skill.desc}</Item.Description>
                                            </Item.Content>
                                        </Item>
                                    );
                                }
                            })}
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Item.Group>
                            {skills.map(function (skill, index) {
                                if (index >= skills.length / 2) {
                                    return (
                                        <Item>
                                            {getSkill(skill.name)}
                                            <Item.Content style={{ padding: "0% 0% 20% 10%" }}>
                                                <Header as="h2">{skill.name}</Header>
                                                <Item.Description>{skill.desc}</Item.Description>
                                            </Item.Content>
                                        </Item>
                                    );
                                }
                            })}
                        </Item.Group>
                    </Grid.Column>
                </Grid>
            </Container>
        </Grid>
    );
}
