import { useTranslation } from "react-i18next";
import { EXPERIENCES as experiences } from "../../../constants/constants";
import ExperienceBlock from "./experience-block";
import "./experiences.scss";

const Experiences: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();
    return (
        <div ref={innerRefs.find((ref) => ref.label === "experiences").innerRef} className="experiences-container">
            <div className="section-title">{t("experiences.title")}</div>
            {experiences.map((experience) => (
                <ExperienceBlock key={experience.key} experience={experience} />
            ))}
        </div>
    );
};

export default Experiences;
