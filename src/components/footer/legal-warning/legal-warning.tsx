import { useTranslation } from "react-i18next";
import "./legal-warning.scss";

const LegalWarning = () => {
    const { t } = useTranslation();

    return <div className="copyright">{t("copyright")}</div>;
};

export default LegalWarning;
