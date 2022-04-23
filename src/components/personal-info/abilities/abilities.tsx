import "./abilities.scss";

const Abilities: React.FC<{ innerRefs: any[] }> = ({ innerRefs }) => {
    return (
        <div ref={innerRefs.find((ref) => ref.label === "abilities").innerRef} className="social-media-container">
            abilities block
        </div>
    );
};

export default Abilities;
