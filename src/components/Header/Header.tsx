import logo from "/src/assets/images/logo.svg";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import closeIcon from "/src/assets/images/icon-close.svg";
import hamburgerIcon from "/src/assets/images/icon-hamburger.svg";

function Header() {
  return (
    <>
      <header className={styles["primary-header"]}>
        <div className={`container`}>
          <div className={styles["nav-wrapper"]}>
            <a href="#">
              <img src={logo} alt="Manage" />
            </a>
            <button
              className={styles["mobile-nav-toggle"]}
              aria-controls="primary-navigation"
            >
              <img
                className={styles["icon-hamburger"]}
                src={hamburgerIcon}
                alt=""
                aria-hidden="true"
              />
              <img
                className={styles["icon-close"]}
                src={closeIcon}
                alt=""
                aria-hidden="true"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav className={styles["primary-navigation"]}>
              <ul
                aria-label="Primary"
                role="list"
                className={styles["nav-list"]}
                id="primary-navigation"
              >
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </nav>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
