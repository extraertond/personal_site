import { useTranslation, Trans } from "react-i18next";
import clip from "../../../../assets/images/clip.png";
import "./education-block-desktop.scss";

interface Props {
    education: {
        img: any;
        key: string;
    };
}

const EducationBlockDesktop: React.FC<Props> = ({ education }: Props) => {
    const { t } = useTranslation();

    return (
        <div id={education.key} className={`${education.key}-education-desktop-container`}>
            <div className="education-block-desktop-container">
                <div className="education">
                    <table>
                        <thead>
                            <tr>
                                <th>{t(`education.${education.key}.name`)}</th>
                                <th>
                                    <u>{t(`education.${education.key}.title`)}</u>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="start">
                                        <img className="clip" alt="clip" src={clip} />
                                        <img className="education-img" alt={education.key} src={education.img} />
                                    </div>
                                </td>
                                <td>
                                    <Trans i18nKey={`education.${education.key}.description`}></Trans>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EducationBlockDesktop;
