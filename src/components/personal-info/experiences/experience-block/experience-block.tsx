import { Trans, useTranslation } from "react-i18next";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "@mui/material";
import "./experience-block.scss";

interface ExperienceProps {
    key: string;
    languages: any[];
    frameworks: any[];
    technologies: any[];
}

const ExperienceBlock: React.FC<{ experience: ExperienceProps }> = ({ experience }) => {
    const { t } = useTranslation();
    return (
        <>
            <div key={experience.key} className="experiences">
                <div className="info">
                    <div className="titles">
                        <div className="company-title">{t(`experiences.${experience.key}.company`)}</div>
                        <div className="period">{t(`experiences.${experience.key}.period`)}</div>
                    </div>
                    <div className="descriptions">
                        <div className="role-title">{t(`experiences.${experience.key}.role`)}</div>
                        <p className="description">
                            <Trans i18nKey={`experiences.${experience.key}.description`}></Trans>
                        </p>
                        <div className="company-link">
                            <LinkIcon className="icon" />
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                underline="hover"
                                color="#4e00c2"
                                href={t(`experiences.${experience.key}.webpage`)}
                            >
                                {t(`experiences.${experience.key}.webpage`)}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="logos-container">
                    <div className="logo-container">
                        <span className="logos-title">{t("experiences.languages")}</span>
                        <div className="logos">
                            {experience.languages.map((language, index) => (
                                <img
                                    alt="technology"
                                    key={index}
                                    src={language.logo}
                                    style={language.customStyle ? language.customStyle : {}}
                                ></img>
                            ))}
                        </div>
                    </div>
                    <div className="logo-container">
                        <span className="logos-title">{t("experiences.frameworks")}</span>
                        <div className="logos">
                            {experience.frameworks.map((framework, index) => (
                                <img
                                    alt="technology"
                                    key={index}
                                    src={framework.logo}
                                    style={framework.customStyle ? framework.customStyle : {}}
                                ></img>
                            ))}
                        </div>
                    </div>
                    <div className="logo-container">
                        <span className="logos-title">{t("experiences.technologies")}</span>
                        <div className="logos-last">
                            {experience.technologies.map((tech, index) => (
                                <img
                                    alt="technology"
                                    key={index}
                                    src={tech.logo}
                                    style={tech.customStyle ? tech.customStyle : {}}
                                ></img>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default ExperienceBlock;
