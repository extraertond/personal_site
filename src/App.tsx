import Navbar from "./components/header/navbar/navbar";
import PersonalInfo from "./components/personal-info/personal-info";
import "./App.scss";
import Footer from "./components/footer/footer";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Navbar />
      <PersonalInfo />
      <Footer />
    </div>
  );
};

export default App;
