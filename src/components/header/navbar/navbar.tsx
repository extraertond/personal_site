import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../../constants/constants";
import LangSelector from "../lang-selector/lang-selector";
import "./navbar.scss";

const Navbar: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();

    const scrollIntoSection = (ref: any) => {
        ref?.innerRef?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    return (
        <div className="container">
            <div className="sections">
                {SECTIONS.map((section) => {
                    return (
                        <span
                            key={section.id}
                            className="link"
                            onClick={() => {
                                scrollIntoSection(innerRefs.find((ref) => ref.label === section.id));
                            }}
                        >
                            {t(section.label)}
                        </span>
                    );
                })}
            </div>
            <LangSelector />
        </div>
    );
};

export default Navbar;
