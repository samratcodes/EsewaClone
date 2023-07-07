import'./Policy.scss'
const Policy = () => {
  return (
    <div className="Policy">
      <div className="Policy__content">
        <div className="Policy__content__Grivance eachcolumn">
          <img
            src="https://esewa.com.np/common/images/esewa_logo.png"
            alt="logo"
          />
          <div className="Policy__content__Grivance__text">
            <h3>Grivance officier</h3>
            <div className="small">Om Karki</div>
            <div className="small">Contact:+9779801079465</div>
            <div className="small">Email:cds@esewa.com.np</div>
            <div className="small"> omkarki@esewa.com.np</div>
          </div>
        </div>
        {/* // POLICY // Privacy Policies // Information Security Policy // Terms
        and conditions // Report Fraud/Misuse of Account // Transaction Limits */}
        <div className="Policy__content__Policy eachcolumn">
          <div className="Policy__content__Policy__text">
            <h3>POLICY</h3>
            <div className="small">Privacy Policies</div>
            <div className="small">Information Security Policy</div>
            <div className="small">Terms and conditions </div>
            <div className="small">Report Fraud/Misuse of Account</div>
            <div className="small">Transactiion Limits</div>
          </div>
        </div>
        {/* GENERAL Getting Started Security SMS Syntax Reward Points Video
          Tutorials eSewa Tarrifs */}
        <div className="Policy__content__General eachcolumn">
          <div className="Policy__content__General__text">
            <h3>GENERAL</h3>
            <div className="small">Getting Started</div>
            <div className="small">Security</div>
            <div className="small">SMS Syntax </div>
            <div className="small">Reward Points </div>
            <div className="small">Video Tutorials </div>
            <div className="small">eSewa Tarrifs </div>
          </div>
        </div>
        {/*COMPANY
About us
Career
Blog/News */}
        <div className="Policy__content__Company eachcolumn">
          <div className="Policy__content__Company__text">
            <h3>COMPANY</h3>
            <div className="small">Getting Started</div>
            <div className="small">About us</div>
            <div className="small">Career </div>
            <div className="small">Blog/News</div>
          </div>
        </div>
        {/* PARTNERS
Banks
Western Union
Agents */}
        <div className="Policy__content__PARTNERS eachcolumn">
          <div className="Policy__content__PARTNERS__text">
            <h3>PARTNERS</h3>
            <div className="small">Banks</div>
            <div className="small">Western Union</div>
            <div className="small">Agents</div>
          </div>
        </div>
        {/* HELP
Developer's Guide
FAQ's
Contact us */}
        <div className="Policy__content__help eachcolumn">
          <div className="Policy__content__help__text">
            <h3>HELP</h3>
            <div className="small"> Developers Guide</div>
            <div className="small">FAQs</div>
            <div className="small">Contact us</div>
            <div className="Merchant">Become a Merchant</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy
