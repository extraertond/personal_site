import { useTranslation } from "react-i18next";
import { PROJECT_REPO_LINK as repoLink } from "../../../../constants/constants";
import "./about-project.scss";

const AboutProject: React.FC<{}> = () => {
    const { t } = useTranslation();

    return (
        <div className="about-project-container">
            <div>{t("abilities.about-project.text")}</div>
            <a className="button" href={repoLink} target="_blank" rel="noreferrer">
                {t("abilities.about-project.button-text")}
            </a>
        </div>
    );
};

export default AboutProject;
