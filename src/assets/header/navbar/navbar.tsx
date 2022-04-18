import { useTranslation } from "react-i18next";
import LangSelector from "../lang-selector/lang-selector";
import "./navbar.scss";

function Navbar() {
  const { i18n, t } = useTranslation();
  const links = [
    { label: "links.home", link: "" },
    { label: "links.experience", link: "" },
    { label: "links.abilities", link: "" },
    { label: "links.contact", link: "" },
  ];

  return (
    <div className="container">
      <div className="links">
        {links.map((link) => {
          return <span className="link">{t(link.label)}</span>;
        })}
      </div>
      <LangSelector />
    </div>
  );
}

export default Navbar;
