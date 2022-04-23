import { useTranslation } from "react-i18next";
import Writter from "../../shared/writter/writter";
import "./personal-info.scss";

const PersonalInfo: React.FC<{}> = () => {
  const { t } = useTranslation();
  const tokens = [
    t("personal_info.software_engineer"),
    t("personal_info.software_developer"),
    t("personal_info.frontend_developer"),
    t("personal_info.backend_developer"),
    t("personal_info.fullstack_developer"),
  ];

  return (
    <>
      <div className="personal-container">
        {t("personal_info.fullname")}
        <Writter tokens={tokens} />
      </div>
    </>
  );
};

export default PersonalInfo;
