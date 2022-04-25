import Abilities from "./abilities/abilities";
import Contact from "./contact/contact";
import Education from "./education/education";
import Experience from "./experience/experience";
import About from "./about/about";
import "./personal-info.scss";

const PersonalInfo: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    return (
        <>
            <About innerRefs={innerRefs} />
            <Education innerRefs={innerRefs} />
            <Experience innerRefs={innerRefs} />
            <Abilities innerRefs={innerRefs} />
            <Contact innerRefs={innerRefs} />
        </>
    );
};

export default PersonalInfo;
