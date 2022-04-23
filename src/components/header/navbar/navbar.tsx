import { useTranslation } from "react-i18next";
import { NAVBAR_LINKS as links } from "../../../constants/constants";
import LangSelector from "../lang-selector/lang-selector";
import "./navbar.scss";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="links">
                {links.map((link, index) => {
                    return (
                        <span key={index} className="link">
                            {t(link.label)}
                        </span>
                    );
                })}
            </div>
            <LangSelector />
        </div>
    );
};

export default Navbar;
