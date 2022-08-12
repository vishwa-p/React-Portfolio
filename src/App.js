import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainbody from "./components/Mainbody";
function App() {
  return (
    <div className="page">
      <Header />
      <Mainbody />
      <Footer />
    </div>
  );
}

export default App;
