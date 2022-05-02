import { useTranslation } from "react-i18next";
import {
    LANGUAGES_SKILLS as languages,
    FRAMEWORKS_SKILLS as frameworks,
    TECHNOLOGIES_SKILLS as technologies
} from "../../../constants/constants";
import AbilitiesBlock from "./abilities-block/abilities-block";
import "./abilities.scss";
import AboutProject from "./about-project/about-project";

const Abilities: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();
    const hardSkills = [
        { title: "abilities.hard-skills.languages.title", skills: languages },
        { title: "abilities.hard-skills.frameworks.title", skills: frameworks },
        { title: "abilities.hard-skills.technologies.title", skills: technologies }
    ];

    return (
        <div ref={innerRefs.find((ref) => ref.label === "abilities").innerRef} className="abilities-container">
            <div className="title">{t("abilities.hard-skills.title")}</div>
            {hardSkills.map((block, index) => (
                <AbilitiesBlock key={index} blockTitle={block.title} abilities={block.skills}></AbilitiesBlock>
            ))}
            <AboutProject />
            <div className="title">{t("abilities.soft-skills.title")}</div>
        </div>
    );
};

export default Abilities;
