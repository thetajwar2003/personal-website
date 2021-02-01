import React from 'react'
import { Grid } from 'semantic-ui-react';

import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Contact from './pages/Contact'

export default function Home() {
    // include all the pages
    return (
        <Grid columns={1} style={{padding: "0%", margin: "0%", width: "100%"}}>
            <Grid.Column style={{width: "100%", padding: "0%", margin: "0%"}}>
                <AboutMe/>
                <Skills/>
                <Experience/>
                <Project/>
                <Contact/>
            </Grid.Column>
        </Grid>
    )
}
