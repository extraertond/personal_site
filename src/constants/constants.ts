import bachellor from "../assets/images/bachellor.jpg";
import university from "../assets/images/university.jpg";
import course from "../assets/images/course.jpg";

// Logos
import js from "../assets/svg/js.svg";
import ts from "../assets/svg/ts.svg";
import html5 from "../assets/svg/html5.svg";
import css3 from "../assets/svg/css3.svg";
import java from "../assets/svg/java.svg";
import php from "../assets/svg/php.svg";
import ruby from "../assets/svg/ruby.svg";
import c from "../assets/svg/c.svg";
import csharp from "../assets/svg/csharp.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import node from "../assets/svg/node.svg";
import express from "../assets/svg/express.svg";
import expressBlack from "../assets/svg/express-black.svg";
import reactNative from "../assets/svg/react-native.png";
import angular from "../assets/svg/angular.svg";
import ionic from "../assets/svg/ionic.svg";
import loopback from "../assets/svg/loopback.svg";
import laravel from "../assets/svg/laravel.svg";
import ror from "../assets/svg/ror.svg";
import javaee from "../assets/svg/javaee.png";
import mysql from "../assets/svg/mysql.svg";
import vscode from "../assets/svg/vscode.svg";
import redux from "../assets/svg/redux.svg";
import git from "../assets/svg/git.svg";
import gitrepo from "../assets/svg/gitrepo.svg";
import scrum from "../assets/svg/scrum.svg";
import trello from "../assets/svg/trello.png";
import atlassian from "../assets/svg/atlassian.svg";
import google from "../assets/svg/google.svg";
import microsoft from "../assets/svg/microsoft.svg";
import mui from "../assets/svg/mui.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import linux from "../assets/svg/linux.svg";
import nginx from "../assets/svg/nginx.svg";
import pm2 from "../assets/svg/pm2.png";
import pm2Black from "../assets/svg/pm2-black.png";
import docker from "../assets/svg/docker.svg";
import jenkins from "../assets/svg/jenkins.png";
import mongodb from "../assets/svg/mongodb.svg";

export const CHANGE_TOKEN_PERIOD = 3000;
export const ADD_CHAR_PERIOD = 70;
export const REMOVE_CHAR_PERIOD = 30;

export const NUMBER_PREFIX_LENGTH = 4;
export const PHONE_MIN_LENGTH = 8;
export const MESSAGE_MIN_LENGTH = 20;

export const EMAIL = "fernandeznestor1996@gmail.com";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/n%C3%A9stor-fern%C3%A1ndez-3b19541b6/";
export const GITHUB_LINK = "https://github.com/extraertond";
export const PROJECT_REPO_LINK = "https://github.com/extraertond/personal_site";

export const SECTIONS = [
    { id: "about", label: "links.about" },
    { id: "education", label: "links.education" },
    { id: "experience", label: "links.experience" },
    { id: "abilities", label: "links.abilities" },
    { id: "contact", label: "links.contact" }
];

export const ROLES = [
    "personal-info.software-engineer",
    "personal-info.software-developer",
    "personal-info.frontend-developer",
    "personal-info.backend-developer",
    "personal-info.fullstack-developer"
];

export const CONTACT_FORM_TEMPLATE = {
    firstName: {
        key: "firstName",
        value: "",
        helperText: "",
        label: "contact.form.first-name-label",
        required: true
    },
    lastName: {
        key: "lastName",
        value: "",
        helperText: "",
        label: "contact.form.last-name-label",
        required: false
    },
    email: {
        key: "email",
        value: "",
        helperText: "",
        label: "contact.form.email-label",
        required: true
    },
    prefix: {
        key: "prefix",
        value: "34",
        helperText: "",
        label: "contact.form.prefix-label",
        required: false
    },
    phoneNumber: {
        key: "phoneNumber",
        value: "",
        helperText: "",
        label: "contact.form.phone-label",
        required: false
    },
    message: {
        key: "message",
        value: "",
        helperText: "",
        label: "contact.form.message-label",
        required: true
    }
};

export const EDUCATIONS = [
    {
        key: "university",
        inProp: false,
        img: university
    },
    {
        key: "course",
        inProp: false,
        img: course
    },
    {
        key: "school",
        inProp: false,
        img: bachellor
    }
];

export const LANGUAGES_SKILLS = [
    { logo: js, title: "abilities.hard-skills.languages.javascript", rate: 5 },
    { logo: ts, title: "abilities.hard-skills.languages.typescript", rate: 4.5 },
    { logo: html5, customStyle: { width: 23, marginLeft: -3}, title: "abilities.hard-skills.languages.html5", rate: 4.5 },
    { logo: css3, title: "abilities.hard-skills.languages.css3", rate: 4.5 },
    { logo: java, title: "abilities.hard-skills.languages.java", rate: 3.5 },
    { logo: php, customStyle: { width: 28, marginLeft: -4}, title: "abilities.hard-skills.languages.php", rate: 3 },
    { logo: ruby, title: "abilities.hard-skills.languages.ruby", rate: 2.5 },
    { logo: c, title: "abilities.hard-skills.languages.c", rate: 2.5 },
    { logo: csharp, title: "abilities.hard-skills.languages.csharp", rate: 2 },
    { logo: python, title: "abilities.hard-skills.languages.python", rate: 1.5 }
];

export const FRAMEWORKS_SKILLS = [
    { logo: react, title: "abilities.hard-skills.frameworks.react", rate: 5 },
    { logo: node, title: "abilities.hard-skills.frameworks.node", rate: 4 },
    { logo: express, title: "abilities.hard-skills.frameworks.express", rate: 4 },
    { logo: reactNative, customStyle: { width: 25, marginLeft: -3}, title: "abilities.hard-skills.frameworks.react-native", rate: 4 },
    { logo: angular,customStyle: { width: 25, marginLeft: -3}, title: "abilities.hard-skills.frameworks.angular", rate: 3.5 },
    { logo: ionic, title: "abilities.hard-skills.frameworks.ionic", rate: 3.5 },
    { logo: loopback, customStyle: { width: 65, marginRight: -20}, title: "abilities.hard-skills.frameworks.loopback", rate: 3 },
    { logo: laravel, title: "abilities.hard-skills.frameworks.laravel", rate: 2.5 },
    { logo: ror, customStyle: { width: 25, marginLeft: -3}, title: "abilities.hard-skills.frameworks.ror", rate: 2 },
    { logo: javaee, customStyle: { width: 35, marginLeft: -8}, title: "abilities.hard-skills.frameworks.javaee", rate: 1.5 },
];

export const TECHNOLOGIES_SKILLS = [
    { logo: mysql, customStyle: { width: 45, marginLeft: -12}, title: "abilities.hard-skills.technologies.mysql", rate: 5 },
    { logo: vscode, title: "abilities.hard-skills.technologies.vscode", rate: 5 },
    { logo: redux, customStyle: { width: 25, marginLeft: -3}, title: "abilities.hard-skills.technologies.redux", rate: 4.5 },
    { logo: git, title: "abilities.hard-skills.technologies.git", rate: 4.5 },
    { logo: gitrepo, title: "abilities.hard-skills.technologies.gitrepo", rate: 4.5 },
    { logo: scrum, title: "abilities.hard-skills.technologies.scrum", rate: 4.5 },
    { logo: trello, customStyle: { width: 25, marginLeft: -3}, title: "abilities.hard-skills.technologies.trello", rate: 4.5 },
    { logo: atlassian, title: "abilities.hard-skills.technologies.atlassian", rate: 4.5 },
    { logo: google, title: "abilities.hard-skills.technologies.google", rate: 4 },
    { logo: microsoft, title: "abilities.hard-skills.technologies.microsoft", rate: 4 },
    { logo: mui, title: "abilities.hard-skills.technologies.mui", rate: 4 },
    { logo: bootstrap, title: "abilities.hard-skills.technologies.bootstrap", rate: 3.5 },
    { logo: linux, title: "abilities.hard-skills.technologies.linux", rate: 3.5 },
    { logo: nginx, title: "abilities.hard-skills.technologies.nginx", rate: 3 },
    { logo: pm2, customStyle: { width: 45, marginLeft: -18}, title: "abilities.hard-skills.technologies.pm2", rate: 3 },
    { logo: docker, title: "abilities.hard-skills.technologies.docker", rate: 2.5 },
    { logo: jenkins, customStyle: { width: 25, marginLeft: -4}, title: "abilities.hard-skills.technologies.jenkins", rate: 2.5 },
    { logo: mongodb, title: "abilities.hard-skills.technologies.mongodb", rate: 2 }
];

export const ABILITIES_SKILLS = [
    { title: "abilities.soft-skills.compromise", description: "abilities.soft-skills.compromise-description", rate: 5 },
    { title: "abilities.soft-skills.communication", description: "abilities.soft-skills.communication-description", rate: 5 },
    { title: "abilities.soft-skills.creativity", description: "abilities.soft-skills.creativity-description", rate: 4.5 },
    { title: "abilities.soft-skills.adaptation", description: "abilities.soft-skills.adaptation-description", rate: 4.5 },
    { title: "abilities.soft-skills.negotiation", description: "abilities.soft-skills.negotiation-description", rate: 4.5 },
    { title: "abilities.soft-skills.learning", description: "abilities.soft-skills.learning-description", rate: 4 },
    { title: "abilities.soft-skills.teamwork", description: "abilities.soft-skills.teamwork-description", rate: 4 }
];

export const EXPERIENCES = [
    {
        key: "sombradoble",
        languages: [{logo: ts}, {logo: js}, {logo: html5}, {logo: css3, customStyle: {width: 15}}],
        frameworks: [{logo: react}, {logo: ionic},  {logo: node}, {logo: loopback, customStyle: {width: 75}}],
        technologies: [{logo: redux}, {logo: ts}, {logo: mysql, customStyle: {width: 45}}, {logo: bootstrap}, {logo: mui},  {logo: nginx}, {logo: pm2Black, customStyle: {width: 50}}]
    },
    {
        key: "nazaries",
        languages: [{logo: ts}, {logo: js},  {logo: php, customStyle: {width: 30}}, {logo: ruby}, {logo: c}, {logo: html5}, {logo: css3, customStyle: {width: 15}}],
        frameworks: [{logo: react}, {logo: reactNative},  {logo: node}, {logo: expressBlack}, {logo: angular, customStyle: {width: 25}}, {logo: laravel}, {logo: ror, customStyle: {width: 27}}],
        technologies: [{logo: redux}, {logo: mysql, customStyle: {width: 45}}, {logo: mongodb}, {logo: bootstrap}, {logo: mui}, {logo: docker, customStyle: {width: 27}}, {logo: jenkins}]
    }
];

export const ABOUT_PARAGRAPH_LABELS = ["1", "2", "3"];

export const DEFAULT_TRANSITION_PERIOD = 300;
