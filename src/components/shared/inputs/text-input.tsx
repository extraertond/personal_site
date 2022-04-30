import { styled, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./text-input.scss";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "black"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
        fontFamily: "Jura !important",
        fontWeight: "bold",
        "&.Mui-focused fieldset": {
            borderColor: "black"
        }
    }
});

interface Props {
    maxRows?: number;
    InputProps?: Object;
    inputProps?: Object;
    className?: string;
    inputObject: {
        key: string;
        label: string;
        value: any;
        helperText: string;
        required: boolean;
    };
    setForm: any;
}

const TextInput: React.FC<Props> = ({ maxRows, inputProps, InputProps, className, inputObject, setForm }) => {
    const { t } = useTranslation();
    const setValue = (value: any) => {
        setForm((oldForm: any) => {
            const auxForm = { ...oldForm };
            if (["prefix", "phoneNumber"].includes(inputObject.key)) {
                // Clean special characters
                [".", ",", "e", "+", "-"].forEach((char) => {
                    value = value.replace(char, "");
                });
            }
            auxForm[inputObject.key].value = value;
            return auxForm;
        });
    };

    return (
        <CssTextField
            required={inputObject.required}
            rows={maxRows}
            multiline={!!maxRows}
            className={className}
            label={t(inputObject.label)}
            value={inputObject?.value}
            error={!!inputObject?.helperText}
            helperText={!!inputObject?.helperText ? t(inputObject?.helperText) : null}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            variant="outlined"
            inputProps={inputProps}
            InputProps={InputProps}
        ></CssTextField>
    );
};

export default TextInput;
