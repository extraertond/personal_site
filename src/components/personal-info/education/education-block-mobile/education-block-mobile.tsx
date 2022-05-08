import { useTranslation, Trans } from "react-i18next";
import clip from "../../../../assets/images/clip.png";
import "./education-block-mobile.scss";

interface Props {
    education: {
        img: any;
        key: string;
    };
}

const EducationBlockMobile: React.FC<Props> = ({ education }: Props) => {
    const { t } = useTranslation();

    return (
        <div className="education-mobile-container">
            <div className="center">{t(`education.${education.key}.name`)}</div>
            <div className="title">{t(`education.${education.key}.title`)}</div>
            <div className="img-container">
                <img className="clip" alt="clip" src={clip} />
                <img className="education-img" alt={education.key} src={education.img} />
            </div>
            <span>
                <Trans i18nKey={`education.${education.key}.description`}></Trans>
            </span>
        </div>
    );
};

export default EducationBlockMobile;
