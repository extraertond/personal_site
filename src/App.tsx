import Navbar from "./header/navbar/navbar";
import PersonalInfo from "./blocks/personal-info/personal-info";
import "./App.scss";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Navbar />
      <PersonalInfo />
    </div>
  );
};

export default App;
