import { useTranslation } from "react-i18next";
import LangSelector from "../lang-selector/lang-selector";
import "./navbar.scss";

function Navbar() {
  const { t } = useTranslation();
  const links = [
    { label: "links.home", link: "" },
    { label: "links.experience", link: "" },
    { label: "links.abilities", link: "" },
    { label: "links.contact", link: "" },
  ];

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
}

export default Navbar;
