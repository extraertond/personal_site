import { LinkedIn, GitHub, MailOutline } from "@mui/icons-material";
import { Link } from "@mui/material";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "../../../constants/constants";
import ExternalLink from "../../shared/icon-link/external-link";
import "./social-media.scss";

const SocialMedia = () => {
    const openMail = (event: React.MouseEvent<HTMLElement>) => {
        window.location.href = `mailto:${EMAIL}`;
        event.preventDefault();
    };
    return (
        <div className="social-media-container">
            <ExternalLink url={LINKEDIN_LINK}>
                <LinkedIn sx={{ fontSize: 50 }} />
            </ExternalLink>
            <ExternalLink url={GITHUB_LINK}>
                <GitHub sx={{ fontSize: 50 }} />
            </ExternalLink>
            <Link className="social-link" color="inherit" target="blank" rel="noreferrer" onClick={(e) => openMail(e)}>
                <MailOutline sx={{ fontSize: 50 }} />
            </Link>
        </div>
    );
};

export default SocialMedia;
