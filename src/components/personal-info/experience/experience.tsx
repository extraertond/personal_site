import "./experience.scss";

const Experience: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    return (
        <div ref={innerRefs.find((ref) => ref.label === "experience").innerRef} className="social-media-container">
            experience block
        </div>
    );
};

export default Experience;
