import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { EDUCATIONS } from "../../../constants/constants";
import EducationBlock from "./education-block/education-block";
import "./education.scss";

const Education: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();
    const [inSchool, setInSchool] = useState(false);
    const [inUniversity, setInUniversity] = useState(false);
    const [inCourse, setInCourse] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting === true) {
                    initFadeTransition();
                }
            },
            { threshold: [1] }
        );
        const educationTitle = document.querySelector("#education-title")!;
        observer.observe(educationTitle);
    });

    const initFadeTransition = () => {
        setTimeout(() => {
            setInSchool(true);
        }, 1000);
        setTimeout(() => {
            setInCourse(true);
        }, 3000);
        setTimeout(() => {
            setInUniversity(true);
        }, 5000);
    };

    const getInProp = (key: string) => {
        switch (key) {
            case "school":
                return inSchool;
            case "course":
                return inCourse;
            case "university":
                return inUniversity;
        }
    };

    return (
        <div ref={innerRefs.find((ref) => ref.label === "education").innerRef} className="education-container">
            <span id="education-title" className="section-title">
                {t("education.title")}
            </span>
            <div className="educations">
                {EDUCATIONS.map((education, index) => (
                    <EducationBlock
                        key={education.key}
                        education={education}
                        inProp={getInProp(education.key)}
                    ></EducationBlock>
                ))}
            </div>
        </div>
    );
};

export default Education;
