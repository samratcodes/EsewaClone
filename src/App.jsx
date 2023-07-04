import Navbar from "./Components/Navbar/Navbar"
import'./App.css';
import Nav2 from "./Components/Nav2/Nav2";
import Menu from "./Components/Content/Menu";
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Nav2/>
      <Menu/>
    </div>
  )
}

export default App