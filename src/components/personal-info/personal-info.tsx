import Abilities from "./abilities";
import Contact from "./contact";
import Education from "./education";
import Experiences from "./experiences";
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
