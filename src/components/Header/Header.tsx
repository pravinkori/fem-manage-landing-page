import logo from "/src/assets/images/logo.svg";
import styles from "./Header.module.css";
import "../../css/App.css";

function Header() {
  return (
    <>
      <header className={styles["primary-header"]}>
        <div className={styles["container"]}>
          <a href="#">
            <img src={logo} alt="Manage" />
          </a>
          <nav className={styles["primary-navigation"]}>
            <ul role="list" className={styles["nav-list"]}>
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
          <button className={styles["button"]}>Get Started</button>
        </div>
      </header>
    </>
  );
}

export default Header;
