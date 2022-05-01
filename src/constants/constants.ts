import bachellor from "../assets/images/bachellor.jpg";
import university from "../assets/images/university.jpg";
import course from "../assets/images/course.jpg";

export const CHANGE_TOKEN_PERIOD = 3000;
export const ADD_CHAR_PERIOD = 70;
export const REMOVE_CHAR_PERIOD = 30;

export const NUMBER_PREFIX_LENGTH = 4;
export const PHONE_MIN_LENGTH = 8;
export const MESSAGE_MIN_LENGTH = 20;

export const EMAIL = "fernandeznestor1996@gmail.com";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/n%C3%A9stor-fern%C3%A1ndez-3b19541b6/";
export const GITHUB_LINK = "https://github.com/extraertond";

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
        required: true,
    },
    lastName: {
        key: "lastName",
        value: "",
        helperText: "",
        label: "contact.form.last-name-label",
        required: false,
    },
    email: {
        key: "email",
        value: "",
        helperText: "",
        label: "contact.form.email-label",
        required: true,
    },
    prefix: {
        key: "prefix",
        value: "34",
        helperText: "",
        label: "contact.form.prefix-label",
        required: false,
    },
    phoneNumber: {
        key: "phoneNumber",
        value: "",
        helperText: "",
        label: "contact.form.phone-label",
        required: false,
    },
    message: {
        key: "message",
        value: "",
        helperText: "",
        label: "contact.form.message-label",
        required: true,
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

export const ABOUT_PARAGRAPH_LABELS = ["1", "2", "3"];

export const DEFAULT_TRANSITION_PERIOD = 300;
