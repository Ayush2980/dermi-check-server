import { Fragment } from "react";
import Logo from "../../assets/img/Logo.png";
import "./pseudo.styles.css"
import {useNavigate} from "react-router-dom"

const PseudoNavbar = () => {
    const navigate = useNavigate();
    const doclick = () => {
        navigate("/")
    }

  return (
    <Fragment>
      <div
        className="pseudo-cont"
        style={{
          height: "10vh",
          width: "100vw",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
          <img onClick={doclick} className="hover-edit" href="/" src={Logo} alt="" style={{ width: "100px" }} />
          <h1 onClick={doclick} href="/" className="hover-edit mx-3">CerebroScan</h1>
      </div>
    </Fragment>
  );
};

export default PseudoNavbar;
