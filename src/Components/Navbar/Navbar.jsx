import'./Nav.scss'
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__Logo">
        <img
          src="https://esewa.com.np/common/images/esewa_logo.png"
          alt="logo"
        />
      </div>
      <div className="Navbar__Search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="Search"
          id="Search"
          placeholder="Search services/merchant by tags (e.g.ads|)"
        />
      </div>
      <div className="Navbar__form">
        <form action="">
          <div className="id">
            <i className="fa-solid fa-user"></i>
            <input type="text" name="id" id="id" placeholder="eSewa ID" />
          </div>
          <div className="password">
            <i className="fa-solid fa-lock"></i>
            <input type="password" name="" id="" placeholder="Password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Navbar