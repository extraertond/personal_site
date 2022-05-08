import { useRef } from "react";
import Navbar from "./components/header/navbar";
import PersonalInfo from "./components/personal-info";
import ScrollButton from "./components/shared/scroll-button";
import Footer from "./components/footer";
import "./App.scss";

const App: React.FC<{}> = () => {
    const refs = [
        { label: "about", innerRef: useRef<null | HTMLDivElement>(null) },
        { label: "education", innerRef: useRef<null | HTMLDivElement>(null) },
        { label: "experiences", innerRef: useRef<null | HTMLDivElement>(null) },
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
