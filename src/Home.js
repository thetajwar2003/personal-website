import React from 'react'
import { Grid, Image } from 'semantic-ui-react';

import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Contact from './pages/Contact'
import background from './images/background.png'

export default function Home() {
    // include all the pages
    return (
        <Grid columns={1} style={{padding: "0%", margin: "0%", width: "100%"}}>
            <Grid.Column style={{width: "100%", padding: "0%", margin: "0%"}}>
                {/* <Image src={background} fluid /> */}
                <AboutMe/>
                <Skills/>
                <Experience/>
                <Project/>
                <Contact/>
            </Grid.Column>
        </Grid>
    )
}