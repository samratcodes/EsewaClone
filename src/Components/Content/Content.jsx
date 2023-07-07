import Antivirus from "./Antivirus"
import Insurance from "./Insurance"
import Menu from "./Menu"
import NewAdmission from "./NewAdmission"
import NewServices from "./NewServices"
import Re1 from "./Re1"
import Services from "./Services"

const Content = () => {
  return (
    <div className="Content">
      <Menu />
      <Re1 />
      <Services />
      <NewServices />
      <NewAdmission />
      <Insurance />
      <Antivirus />
      
    </div>
  );
}

export default Content