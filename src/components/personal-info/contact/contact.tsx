import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Send from "@mui/icons-material/Send";
import { validateContactForm } from "../../../services/validator.service";
import { sendEmail } from "../../../services/email.service";
import { CONTACT_FORM_TEMPLATE as defaultForm } from "../../../constants/constants";
import TextInput from "../../shared/text-input";
import Alert from "../../shared/alert";
import "./contact.scss";

const Contact: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const [form, setForm] = useState({ ...defaultForm });
    const [showAlert, setShowAlert] = useState(false);
    const [isErrored, setIsErrored] = useState(false);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const submit = async (event: any) => {
        event.preventDefault();
        setShowAlert(false);
        if (validateContactForm(form, setForm)) {
            setLoading(true);
            const body = {
                firstname: form.firstName.value,
                lastname: form.lastName.value,
                email: form.email.value,
                phone: form.phoneNumber.value,
                message: form.message.value
            };

            const response = await sendEmail(body);
            if (response === 200) {
                cleanForm();
            }
            setShowAlert(true);
            setLoading(false);
            setIsErrored(response !== 200);
        }
    };

    const cleanForm = () => {
        setForm((oldForm: any) => {
            const newForm = { ...oldForm };
            newForm.firstName.value = "";
            newForm.lastName.value = "";
            newForm.email.value = "";
            newForm.prefix.value = "34";
            newForm.phoneNumber.value = "";
            newForm.message.value = "";
            return newForm;
        });
    };

    return (
        <div ref={innerRefs.find((ref) => ref.label === "contact").innerRef} className="contact-container">
            <span className="section-title">{t("contact.title")}</span>
            <form onSubmit={submit}>
                <div className="row">
                    <TextInput className="margin" inputObject={form?.firstName} setForm={setForm}></TextInput>
                    <TextInput inputObject={form?.lastName} setForm={setForm}></TextInput>
                </div>
                <div className="row">
                    <TextInput inputObject={form?.email} setForm={setForm}></TextInput>
                </div>
                <div className="row">
                    <TextInput
                        className="margin prefix-width"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+</InputAdornment>
                        }}
                        inputProps={{
                            type: "number",
                            maxLength: 4
                        }}
                        inputObject={form?.prefix}
                        setForm={setForm}
                    ></TextInput>
                    <TextInput
                        inputObject={form?.phoneNumber}
                        inputProps={{
                            type: "number",
                            maxLength: 12
                        }}
                        setForm={setForm}
                    ></TextInput>
                </div>
                <div className="row">
                    <TextInput maxRows={4} inputObject={form?.message} setForm={setForm}></TextInput>
                </div>
                <div className="row">
                    <LoadingButton
                        loadingPosition="end"
                        loading={loading}
                        variant="contained"
                        type="submit"
                        endIcon={<Send />}
                    >
                        {t("contact.form.submit")}
                    </LoadingButton>
                </div>
                <Alert open={showAlert} setOpen={setShowAlert} errored={isErrored}></Alert>
            </form>
        </div>
    );
};

export default Contact;
