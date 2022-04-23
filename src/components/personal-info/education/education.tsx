import "./education.scss";

const Education: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    return (
        <div ref={innerRefs.find((ref) => ref.label === "education").innerRef} className="social-media-container">
            education block
        </div>
    );
};

export default Education;
