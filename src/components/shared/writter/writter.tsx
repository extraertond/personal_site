import { useEffect, useState } from "react";
import { ADD_CHAR_PERIOD, REMOVE_CHAR_PERIOD, CHANGE_TOKEN_PERIOD } from "../../../constants/constants";
import "./writter.scss";

const Writter: React.FC<{ tokens: string[] }> = ({ tokens }) => {
    const [text, setText] = useState("|");
    const [tokenIndex, setTokenIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [direction, setDirection] = useState(true);

    useEffect(() => {
        scheduleTokens();
    }, [charIndex, tokenIndex]);

    const scheduleTokens = () => {
        if (charIndex === 0 && !direction) {
            nextToken();
        } else if (charIndex + 1 === tokens[tokenIndex].length && direction) {
            changeDirection(false, tokens[tokenIndex].length);
        } else if (charIndex !== 0 && !direction) {
            nextChar(charIndex - 1, REMOVE_CHAR_PERIOD);
        } else if (charIndex === 0 && !direction) {
            changeDirection(true);
        } else {
            nextChar(charIndex + 1, ADD_CHAR_PERIOD);
        }
    };

    const nextToken = () => {
        setTimeout(() => {
            setText(" ...");
            setCharIndex(0);
            setTokenIndex((tokenIndex + 1) % tokens.length);
            setDirection(true);
        }, ADD_CHAR_PERIOD);
    };

    const nextChar = (newCharIndex: number, period: number) => {
        setTimeout(() => {
            setCharIndex(newCharIndex);
        }, period);
        setText(tokens[tokenIndex].substring(0, newCharIndex) + " ...");
    };

    const changeDirection = (newDirection: boolean, newCharIndex: number = 0) => {
        setTimeout(() => {
            setCharIndex(newCharIndex);
        }, CHANGE_TOKEN_PERIOD);
        setDirection(newDirection);
        setText(tokens[tokenIndex].substring(0, newCharIndex + 1) + " ...");
    };

    return (
        <div className="role-name">
            <span>{text}</span>
        </div>
    );
};

export default Writter;
