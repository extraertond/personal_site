import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./scroll-button.scss";

const ScrollButton: React.FC<{}> = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
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

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="scroll-button" onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }}>
            <ArrowCircleUpIcon sx={{ fontSize: 50 }} />
        </div>
    );
};

export default ScrollButton;
