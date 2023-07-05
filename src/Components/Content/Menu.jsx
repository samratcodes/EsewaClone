import './Menu.scss'
const Menu = () => {
  return (
    <div className="Menu">
      <div className="sidemenu">
        <div className="sidemenu__parts">
          <div className="text">Topup&Recharge</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">Electricity and Water</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">Tv Payments</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">Bus Tickets/Tours and Travels </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">Education Payments</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">DOFE/Insurance Payment</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">Financial Services</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidemenu__parts">
          <div className="text">Movies & Entertainment</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="images">
        <img
          src="https://cdn.esewa.com.np/ui/images/slider/bZrESiaMiSfNq8XjBohUviber_image_2023-06-15_17-59-26-733.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Menu