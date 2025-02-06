import FooterButtonBar from "./FooterButtonBar"
import FooterLeftSide from "./FooterLeftSide"
import FooterRightSide from "./FooterRightSide"
import "./index.css"
const Footer = () => {
  return (
    <div className="footerShadow">
        <div className="container">
            <div className="footerMain">
                <FooterButtonBar/>
                <div className="footerBottom">
                <FooterLeftSide/>
                <FooterRightSide/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer