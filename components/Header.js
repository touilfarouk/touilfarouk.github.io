const Header = () => {
  return (
    <header className="main-header">
      <a href="index.html" className="ajax logo-holder">
        <img src="images/logo.png" alt="" />
      </a>

      <span className="isonline"></span>
      <div className="nav-button but-hol">
        <span className="ncs"></span>
        <span className="nos"></span>
        <span className="nbs"></span>
        <div className="menu-button-text">Menu</div>
      </div>

      <div className="header-contacts">
        <ul>
          <li>
            <span>01. Call </span>
            <a href="tel:+4(897)56412322">+4(897)56412322</a>
          </li>
          <li>
            <span>02. Write </span>
            <a href="mailto:theside@domain.com">codacom@domain.com</a>
          </li>
        </ul>
        <a href="contacts.html" className="ajax contacts-btn">
          Get in touch
        </a>
      </div>
    </header>
  );
};
export default Header;
