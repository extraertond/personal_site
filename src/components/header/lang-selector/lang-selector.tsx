import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import spainFlag from "../../../assets/gifs/spain-flag.gif";
import ukFlag from "../../../assets/gifs/uk-flag.gif";
import "./lang-selector.scss";

const LangSelector = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className="flags-container">
            <Tooltip title={t("header.english")}>
                <img onClick={() => i18n.changeLanguage("en")} className="flag" src={ukFlag} alt="english" />
            </Tooltip>
            <Tooltip title={t("header.spanish")}>
                <img onClick={() => i18n.changeLanguage("es")} className="flag" src={spainFlag} alt="spanish" />
            </Tooltip>
        </div>
    );
};

export default LangSelector;
