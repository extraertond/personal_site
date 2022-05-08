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
                        <div className="company-title">{t(`experience.${experience.key}.company`)}</div>
                        <div className="period">{t(`experience.${experience.key}.period`)}</div>
                    </div>
                    <div className="descriptions">
                        <div className="role-title">{t(`experience.${experience.key}.role`)}</div>
                        <div>
                            <Trans i18nKey={`experience.${experience.key}.description`}></Trans>
                        </div>
                        <div className="company-link">
                            <LinkIcon sx={{ fontSize: 30, marginRight: "5px", marginTop: "3px" }} />
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                underline="hover"
                                color="#4e00c2"
                                href={t(`experience.${experience.key}.webpage`)}
                            >
                                {t(`experience.${experience.key}.webpage`)}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="logos-container">
                    <div className="logo-container">
                        <span className="logos-title">{t("Languages")}</span>
                        <div className="logos">
                            {experience.languages.map((language) => (
                                <img
                                    alt="technology"
                                    src={language.logo}
                                    style={language.customStyle ? language.customStyle : {}}
                                ></img>
                            ))}
                        </div>
                    </div>
                    <div className="logo-container">
                        <span className="logos-title">{t("Frameworks")}</span>
                        <div className="logos">
                            {experience.frameworks.map((framework) => (
                                <img
                                    alt="technology"
                                    src={framework.logo}
                                    style={framework.customStyle ? framework.customStyle : {}}
                                ></img>
                            ))}
                        </div>
                    </div>
                    <div className="logo-container">
                        <span className="logos-title">{t("Technologies")}</span>
                        <div className="logos-last">
                            {experience.technologies.map((tech) => (
                                <img
                                    alt="technology"
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
