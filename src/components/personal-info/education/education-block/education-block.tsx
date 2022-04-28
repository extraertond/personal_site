import { useTranslation, Trans } from "react-i18next";
import FadeElement from "../../../shared/fade-element/fade-element";
import clip from "../../../../assets/images/clip.png";
import "./education-block.scss";

interface Props {
    education: {
        img: any;
        key: string;
    };
    inProp: any;
}

const Education: React.FC<Props> = ({ education, inProp }: Props) => {
    const { t } = useTranslation();

    return (
        <FadeElement in={inProp}>
            <div id={education.key} className={`${education.key}-education-container`}>
                <div className="education-block-container">
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
                                            <img className="clip" src={clip} />
                                            <img className="education-img" src={education.img} />
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
        </FadeElement>
    );
};

export default Education;
