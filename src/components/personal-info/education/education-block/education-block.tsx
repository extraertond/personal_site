import FadeElement from "../../../shared/fade-element";
import EducationBlockDesktop from "../education-block-desktop";
import EducationBlockMobile from "../education-block-mobile";
import "./education-block.scss";

interface Props {
    education: {
        img: any;
        key: string;
    };
    inProp: any;
}

const EducationBlock: React.FC<Props> = ({ education, inProp }: Props) => {
    return (
        <FadeElement in={inProp}>
            <div id={education.key}>
                <EducationBlockDesktop education={education}></EducationBlockDesktop>
                <EducationBlockMobile education={education}></EducationBlockMobile>
            </div>
        </FadeElement>
    );
};

export default EducationBlock;
