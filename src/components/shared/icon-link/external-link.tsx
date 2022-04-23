import { Link } from "@mui/material";
import "./external-link.scss";

const ExternalLink: React.FC<{ url: string; children: JSX.Element }> = ({ url, children }) => {
    return (
        <Link className="social-link" color="inherit" target="blank" rel="noreferrer" href={url}>
            {children}
        </Link>
    );
};

export default ExternalLink;
