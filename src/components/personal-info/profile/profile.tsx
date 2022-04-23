import { useTranslation } from "react-i18next";
import { ROLES } from "../../../constants/constants";
import Writter from "../../shared/writter/writter";
import "./profile.scss";

const Profile: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();

    return (
        <>
            <div ref={innerRefs.find((ref) => ref.label === "profile").innerRef} className="personal-container">
                {t("personal_info.fullname")}
                <Writter tokens={ROLES} />
            </div>
        </>
    );
};

export default Profile;
