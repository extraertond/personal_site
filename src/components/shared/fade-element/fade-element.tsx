import { FC } from "react";
import { Transition } from "react-transition-group";
import { DEFAULT_TRANSITION_PERIOD as defaultDuration } from "../../../constants/constants";
import "./fade-element.scss";

interface Props {
    in: boolean;
    children: JSX.Element;
    duration?: number;
}

const FadeElement: FC<Props> = ({ in: inProp, children, duration = defaultDuration }: Props) => {
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0
    };

    const transitionStyles: any = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 }
    };
    return (
        <Transition in={inProp} timeout={duration}>
            {(state) => (
                <div
                    className="transition"
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

export default FadeElement;
