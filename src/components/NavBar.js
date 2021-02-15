import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <Menu fixed="top" inverted size="large" style={{ background: "#232323" }} widths={5}>
            <Menu.Item>
                <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Button style={{ color: "#ffffff", background: "none" }}>About Me</Button>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Button style={{ color: "#ffffff", background: "none" }}>Skills</Button>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Button style={{ color: "#ffffff", background: "none" }}>Experience</Button>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Button style={{ color: "#ffffff", background: "none" }}>Projects</Button>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Button style={{ color: "#ffffff", background: "none" }}>Contact</Button>
                </Link>
            </Menu.Item>
        </Menu>
        // <div class="ui top fixed menu">
        //     <a class="item">Features</a>
        //     <a class="item">Testimonials</a>
        //     <a class="item">Sign-in</a>
        // </div>
    )
}
