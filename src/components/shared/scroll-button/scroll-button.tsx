import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { SECTIONS as sections } from "../../../constants/constants";
import "./scroll-button.scss";

const ScrollButton: React.FC<{}> = () => {
    const [visible, setVisible] = useState(false);
    const [color, setColor] = useState("white");

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            checkColor(scrolled);
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const checkColor = (scrollHeight: number) => {
        let offset = -700;
        const heights = sections.map((section: any) => {
            const container = document.querySelector(`.${section.id}-container`);
            const containerHeight = container?.scrollHeight as number;
            const aux = {
                white: section.backgroundWhite,
                bottom: offset,
                top: offset + containerHeight
            };
            offset += containerHeight;
            return aux;
        });

        const currentSection = heights.find((height) => scrollHeight >= height.bottom && scrollHeight <= height.top);
        setColor(currentSection?.white ? "black" : "white");
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="scroll-button" onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }}>
            <ArrowCircleUpIcon sx={{ fontSize: 50, color: color }} />
        </div>
    );
};

export default ScrollButton;
