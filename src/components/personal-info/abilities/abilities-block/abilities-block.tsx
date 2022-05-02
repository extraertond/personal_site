import { useTranslation } from "react-i18next";
import Ability from "./ability/ability";
import "./abilities-block.scss";

interface AbilityProps {
    title: string;
    description?: string;
    rate: number;
}

interface AbilitiesBlockProps {
    blockTitle: string;
    abilities: AbilityProps[];
}
const AbilitiesBlock: React.FC<AbilitiesBlockProps> = ({ blockTitle, abilities }) => {
    const { t } = useTranslation();

    return (
        <div className="skills-container">
            <div className="skill-section">
                <div className="title">{t(blockTitle)}</div>
                <div className="ul">
                    {abilities.map((ability: AbilityProps, index: number) => (
                        <Ability key={index} ability={ability}></Ability>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AbilitiesBlock;
