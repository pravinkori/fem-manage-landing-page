import logo from "/src/assets/images/logo.svg";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

function Footer() {
  return (
    <section className={`bg-neutral-900 text-neutral-100  padding-block-800`}>
      <div className={`container`}>
        <div className={`even-columns`}>
          <div>
            <img src={logo} alt="Manage" />
            <ul role="list" aria-label="Social links">
              <li>
                <a aria-label="facebook" href="#"></a>
              </li>
              <li>
                <a aria-label="youtube" href="#"></a>
              </li>
              <li>
                <a aria-label="twitter" href="#"></a>
              </li>
              <li>
                <a aria-label="pinterest" href="#"></a>
              </li>
              <li>
                <a aria-label="instagram" href="#"></a>
              </li>
            </ul>
          </div>
          <div>
            <nav className={styles["footer-nav"]}>
              <ul aria-label="Footer" role="list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Products</a>
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
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <form action="">
              <input type="text" />
              <Button>Go</Button>
            </form>
            <p>Copyright 2024. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
