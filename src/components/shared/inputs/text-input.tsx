import { styled, TextField } from "@mui/material";
import "./text-input.scss";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "black"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "black"
        }
    }
});

const TextInput: React.FC<{ label: string; multiline?: boolean; maxRows?: number; className?: string }> = ({
    label,
    maxRows,
    multiline,
    className
}) => {
    return (
        <CssTextField
            maxRows={maxRows}
            rows={maxRows}
            fullWidth
            multiline={multiline}
            className={className}
            id="outlined-basic"
            label={label}
            variant="outlined"
        ></CssTextField>
    );
};

export default TextInput;
