import { validateContactForm } from "../../../services/validator.service";
import { sendEmail } from "../../../services/email.service";
import { Button, InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import TextInput from "../../shared/inputs/text-input";
import Send from "@mui/icons-material/Send";
import { useState } from "react";
import { CONTACT_FORM_TEMPLATE as defaultForm } from "../../../constants/constants";
import "./contact.scss";

const Contact: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    const [form, setForm] = useState({ ...defaultForm });
    const { t } = useTranslation();
    const submit = (event: any) => {
        event.preventDefault();
        if (validateContactForm(form, setForm)) {
            const body = {
                firstname: form.firstName.value,
                lastname: form.lastName.value,
                email: form.email.value,
                phone: form.phoneNumber.value,
                message: form.message.value
            };

            sendEmail(body)
                .then((response) => {
                    cleanForm();
                    console.log(response);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    const cleanForm = () => {
        setForm((oldForm: any) => {
            const newForm = { ...oldForm };
            newForm.firstName.value = "";
            newForm.lastName.value = "";
            newForm.email.value = "";
            newForm.prefix.value = "";
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
                    <Button variant="contained" type="submit" endIcon={<Send />}>
                        {t("contact.form.submit")}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
