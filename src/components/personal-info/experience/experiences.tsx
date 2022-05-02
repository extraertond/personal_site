import { useTranslation } from "react-i18next";
import { EXPERIENCES as experiences } from "../../../constants/constants";
import ExperienceBlock from "./experience-block/experience-block";
import "./experiences.scss";

const Experiences: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();
    return (
        <div ref={innerRefs.find((ref) => ref.label === "experience").innerRef} className="experience-container">
            <span className="section-title">{t("experience.title")}</span>
            {experiences.map((experience) => (
                <ExperienceBlock experience={experience} />
            ))}
        </div>
    );
};

export default Experiences;
