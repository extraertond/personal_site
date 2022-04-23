import Navbar from "./components/header/navbar/navbar";
import PersonalInfo from "./components/personal-info/personal-info";
import Footer from "./components/footer/footer";
import { useRef } from "react";
import ScrollButton from "./components/shared/scroll-button/scroll-button";
import "./App.scss";

const App: React.FC<{}> = () => {
    const refs = [
        { label: "profile", innerRef: useRef<null | HTMLDivElement>(null) },
        { label: "education", innerRef: useRef<null | HTMLDivElement>(null) },
        { label: "experience", innerRef: useRef<null | HTMLDivElement>(null) },
        { label: "abilities", innerRef: useRef<null | HTMLDivElement>(null) },
        { label: "contact", innerRef: useRef<null | HTMLDivElement>(null) }
    ];

    return (
        <div className="App">
            <Navbar innerRefs={refs} />
            <PersonalInfo innerRefs={refs} />
            <Footer />
            <ScrollButton />
        </div>
    );
};

export default App;
