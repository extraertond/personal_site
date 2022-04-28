import { useTranslation } from "react-i18next";
import TextInput from "../../shared/inputs/text-input";
import "./contact.scss";

const Contact: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const { t } = useTranslation();
    return (
        <div ref={innerRefs.find((ref) => ref.label === "contact").innerRef} className="contact-container">
            <span className="section-title">{t("contact.title")}</span>
            <div className="form">
                <div className="row">
                    <TextInput className="margin" label={t("contact.form.first-name-label")}></TextInput>
                    <TextInput label={t("contact.form.last-name-label")}></TextInput>
                </div>
                <div className="row">
                    <TextInput className="margin" label={t("contact.form.email-label")}></TextInput>
                    <TextInput label={t("contact.form.phone-label")}></TextInput>
                </div>
                <div className="row">
                    <TextInput multiline maxRows={4} label={t("contact.form.message-label")}></TextInput>
                </div>
            </div>
        </div>
    );
};

export default Contact;
