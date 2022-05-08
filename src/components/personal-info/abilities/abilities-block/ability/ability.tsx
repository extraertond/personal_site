import { useTranslation } from "react-i18next";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { range } from "lodash";
import "./ability.scss";

interface AbilityProps {
    title: string;
    logo?: any;
    customStyle?: any;
    description?: string;
    rate: number;
}

const Ability: React.FC<{ ability: AbilityProps }> = ({ ability }) => {
    const { t } = useTranslation();

    const GetStarRates = () => {
        const filledStars = Math.trunc(ability.rate);
        const halfStar = ability.rate % 1 >= 0.5;
        const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
        return (
            <>
                {range(filledStars).map((_, index) => (
                    <Star className="icon" key={index}></Star>
                ))}
                {halfStar ? <StarHalf className="icon"></StarHalf> : <></>}
                {range(emptyStars).map((_, index) => (
                    <StarBorder className="icon" key={index}></StarBorder>
                ))}
            </>
        );
    };
    return (
        <div className="ability">
            {ability.logo && (
                <img alt="logo" src={ability.logo} style={ability.customStyle ? ability.customStyle : {}}></img>
            )}
            <div className="text">
                {t(ability.title)}
                {ability.description && <div className="description">{t(ability.description)}</div>}
            </div>
            <div className="rate">
                <GetStarRates />
            </div>
        </div>
    );
};

export default Ability;
