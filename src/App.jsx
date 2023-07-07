import Navbar from "./Components/Navbar/Navbar"
import'./App.css';
import Nav2 from "./Components/Nav2/Nav2";

import Content from "./Components/Content/Content";
import Footer from "./Components/Content/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Nav2 />
      <Content />
      <Footer/>
      <div className="message">
       call
      </div>
    </div>
  );
}

export default App