import SocialMedia from "./social-media/social-media";
import "./footer.scss";
import LegalWarning from "./legal-warning/legal-warning";

const Footer = () => {
    return (
        <div className="footer">
            <SocialMedia />
            <LegalWarning />
        </div>
    );
};

export default Footer;
