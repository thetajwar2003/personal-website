import React, { createRef } from 'react'
import { Menu } from 'semantic-ui-react'

export default function NavBar() {
    const scrollSection = createRef();
    return (
        <Menu fixed="top" fluid secondary size="large" style={{ background: "#ebebeb" }} widths={5}>
            <Menu.Item name="About Me" />
            <Menu.Item name="Skills" />
            <Menu.Item name="Experience" />
            <Menu.Item name="Projects" />
            <Menu.Item name="Contact Me" />
        </Menu>
        // <div class="ui top fixed menu">
        //     <a class="item">Features</a>
        //     <a class="item">Testimonials</a>
        //     <a class="item">Sign-in</a>
        // </div>
    )
}
