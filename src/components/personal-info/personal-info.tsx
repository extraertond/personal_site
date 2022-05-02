import Abilities from "./abilities/abilities";
import Contact from "./contact/contact";
import Education from "./education/education";
import Experiences from "./experience/experiences";
import About from "./about/about";
import "./personal-info.scss";

const PersonalInfo: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    return (
        <>
            <About innerRefs={innerRefs} />
            <Education innerRefs={innerRefs} />
            <Experiences innerRefs={innerRefs} />
            <Abilities innerRefs={innerRefs} />
            <Contact innerRefs={innerRefs} />
        </>
    );
};

export default PersonalInfo;
