import { Close } from "@mui/icons-material";
import { Collapse, Alert as MuiAlert, AlertTitle } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import "./alert.scss";

const Alert: React.FC<{ errored: boolean; open: boolean; setOpen: any }> = ({ errored, open, setOpen }) => {
    const { t } = useTranslation();

    return (
        <Collapse in={open}>
            <MuiAlert
                severity={errored ? "error" : "success"}
                action={
                    <Close
                        onClick={() => {
                            setOpen(false);
                        }}
                        sx={{ fontSize: 30, cursor: "pointer" }}
                    />
                }
                sx={{ mt: 2 }}
            >
                <AlertTitle>
                    <strong>{t(errored ? "alerts.error-title" : "alerts.success-message-title")}</strong>
                </AlertTitle>
                <Trans i18nKey={errored ? "alerts.error-message-body" : "alerts.success-message-body"}></Trans>
            </MuiAlert>
        </Collapse>
    );
};

export default Alert;
