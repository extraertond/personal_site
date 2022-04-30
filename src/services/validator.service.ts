import { PHONE_MIN_LENGTH, MESSAGE_MIN_LENGTH } from "../constants/constants";
import isEmail from "validator/lib/isEmail";

const validateNumberPrefix = (value: string) => {
    if (value.length <= 0) {
        return "contact.form.prefix-error";
    }
};

const validateEmail = (value: string) => {
    if (!isEmail(value)) {
        return "contact.form.email-error";
    }
};

const validatePhoneNumber = (value: string) => {
    if (value.length > 0 && value.length < PHONE_MIN_LENGTH) {
        return "contact.form.phone-number-error";
    }
};

const validateMessage = (value: string) => {
    if (value.length < MESSAGE_MIN_LENGTH) {
        return "contact.form.message-error";
    }
};

const setError = (setForm: any, key: string, error: string) => {
    setForm((oldForm: any) => {
        const auxForm = { ...oldForm };
        auxForm[key].helperText = error;
        return auxForm;
    });
};

export const validateContactForm = (form: any, setForm: any) => {
    let correct = true;

    const errorPrefix = validateNumberPrefix(form.prefix.value);
    if (errorPrefix && !!form.phoneNumber.value) {
        correct = false;
        setError(setForm, "prefix", errorPrefix);
    } else {
        setError(setForm, "prefix", "");
    }

    const errorEmail = validateEmail(form.email.value);
    if (errorEmail) {
        correct = false;
        setError(setForm, "email", errorEmail);
    } else {
        setError(setForm, "email", "");
    }

    const errorPhone = validatePhoneNumber(form.phoneNumber.value);
    if (errorPhone) {
        correct = false;
        setError(setForm, "phoneNumber", errorPhone);
    } else {
        setError(setForm, "phoneNumber", "");
    }

    const errorMessage = validateMessage(form.message.value);
    if (errorMessage) {
        correct = false;
        setError(setForm, "message", errorMessage);
    } else {
        setError(setForm, "message", "");
    }

    return correct;
};
