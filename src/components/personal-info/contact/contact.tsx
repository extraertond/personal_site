import "./contact.scss";

const Contact: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    return (
        <div ref={innerRefs.find((ref) => ref.label === "contact").innerRef} className="social-media-container">
            contact block
        </div>
    );
};

export default Contact;
