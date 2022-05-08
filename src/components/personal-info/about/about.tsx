import { useTranslation, Trans } from "react-i18next";
import { ABOUT_PARAGRAPH_LABELS as paragraphs, ROLES } from "../../../constants/constants";
import Writter from "../../shared/writter";
import avatar from "../../../assets/images/profile.jpg";
import { useState } from "react";
import "./about.scss";

const About: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();
    const [spinning, setSpinning] = useState(false);

    const spin = () => {
        setSpinning(true);
        setTimeout(() => {
            setSpinning(false);
        }, 1000);
    };

    return (
        <>
            <div ref={innerRefs.find((ref) => ref.label === "about").innerRef} className="about-container">
                <div className="roles-container">
                    {t("personal-info.fullname")}
                    <Writter tokens={ROLES} />
                </div>
                <div>
                    <div className="section-title">{t("about.title")}</div>
                    <div className="paragraph-container">
                        <div
                            style={{
                                animation: spinning ? `spin 1s linear` : "none"
                            }}
                            className="avatar-container"
                        >
                            <img className="avatar" src={avatar} alt="avatar"></img>
                            <button onClick={spin}>{t("about.spin-button")}</button>
                        </div>
                        <div className="text-container">
                            {paragraphs.map((paragraph) => (
                                <p key={paragraph}>
                                    <Trans i18nKey={`about.paragraph.${paragraph}`}></Trans>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
