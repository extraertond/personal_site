import SocialMedia from "./social-media";
import LegalWarning from "./legal-warning";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <SocialMedia />
            <LegalWarning />
        </div>
    );
};

export default Footer;
