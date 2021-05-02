/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable array-callback-return */
import React from 'react';
import { Container, Item, Label, Header, Divider, Grid, Icon } from 'semantic-ui-react';

import { projects } from '../constants/resumeData.json';
import { getImage } from '../constants/ImageHandler';


export default function Project(props) {

    return (
        <Grid style={{ padding: "5% 0% 5% 0%", margin: "0%", width: "100%" }} >
            <Container >
                <Header as="h1" textAlign="center" id={props.id}>
                    Projects
                <Divider />
                </Header>
                <Grid columns={1} style={{ padding: "0% 5% 0% 5%", margin: "0%", width: "100%" }} verticalAlign="middle">
                    {projects.map(function (proj, index) {
                        return (
                            <Grid.Row>
                                <Item.Group>
                                    <Item>
                                        <Item.Image src={getImage(proj.name)} rounded />
                                        <Item.Content>
                                            <Item.Header>{proj.name} {" "}
                                                <a href={proj.link} target="_blank" style={{ color: "black" }}>
                                                    <Icon name="external alternate" size="small" />
                                                </a>
                                            </Item.Header>
                                            <Item.Meta>{proj.date}</Item.Meta>
                                            <Item.Description>{proj.meta}</Item.Description>
                                            <Item.Extra>
                                                {proj.tags.map(function (tag, index) {
                                                    return <Label>{tag}</Label>;
                                                })}
                                            </Item.Extra>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Row>
                        );
                    })}
                </Grid>
            </Container>
        </Grid>
    );
}
