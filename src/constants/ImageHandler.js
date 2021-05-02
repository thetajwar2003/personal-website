/* eslint-disable default-case */
import { FaPython, FaJava, FaReact, FaSwift, FaDatabase, FaCogs } from 'react-icons/fa';

import agora from "../images/agora.png";
import lms from "../images/lms.png";
import flapp from "../images/flapp.png";
import voiceassistant from "../images/voiceassistant.png";
import slingshot from '../images/slingshot.png';
import hkp from '../images/hkp.png';

export function getSkill(skill) {
    switch (skill) {
        case "Python":
            return <FaPython size={100} />;
        case "Java":
            return <FaJava size={100} />;
        case "React/Next.js":
            return <FaReact size={100} />;
        case "SwiftUI":
            return <FaSwift size={100} />;
        case "Databases":
            return <FaDatabase size={100} />;
        case "Other Software/Frameworks":
            return <FaCogs size={100} />;
    }
}

export function getImage(name) {
    switch (name) {
        case "Learning Made Simple (LMS)":
            return lms;
        case "Agora":
            return agora;
        case "AI Flappy Bird":
            return flapp;
        case "Google Assistant":
            return voiceassistant;
        case "Slingshot Mentoring":
            return slingshot;
        case "HKP Solutions":
            return hkp;
    }
};