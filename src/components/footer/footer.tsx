import SocialMedia from "./social-media";
import LegalWarning from "./legal-warning";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <SocialMedia />
            <LegalWarning />
        </div>
    );
};

export default Footer;
