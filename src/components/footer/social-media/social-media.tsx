import { Trans } from "react-i18next";
import { LinkedIn, GitHub, MailOutline } from "@mui/icons-material";
import { styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "../../../constants/constants";
import ExternalLink from "../../shared/icon-link/external-link";
import "./social-media.scss";

const EmailTooltip = styled(({ className, ...props }: any) => (
    <Tooltip
        {...props}
        title={
            <div className="email-tooltip">
                <div className="title">
                    <Trans i18nKey="footer.tooltip-email-title"></Trans>
                </div>
                <div className="body">
                    <Trans values={{ email: EMAIL }} i18nKey="footer.tooltip-email-body"></Trans>
                </div>
            </div>
        }
        classes={{ popper: className }}
    />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        fontSize: "15px",
        border: "1px solid #dadde9"
    }
}));

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <ExternalLink url={LINKEDIN_LINK}>
                <LinkedIn sx={{ fontSize: 50 }} />
            </ExternalLink>
            <ExternalLink url={GITHUB_LINK}>
                <GitHub sx={{ fontSize: 50 }} />
            </ExternalLink>
            <EmailTooltip>
                <div className="social-link" color="inherit">
                    <MailOutline sx={{ fontSize: 50 }} />
                </div>
            </EmailTooltip>
        </div>
    );
};

export default SocialMedia;
