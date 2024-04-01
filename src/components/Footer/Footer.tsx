import logo from "/src/assets/images/logo.svg";
import styles from "./Footer.module.css";
import Button from "../Button/Button";
import socialIcons from "/src/assets/images/social-icons.svg";

const footerNavigationList = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Pricing",
    href: "#",
  },
  {
    text: "Products",
    href: "#",
  },
  {
    text: "About us",
    href: "#",
  },
  {
    text: "Careers",
    href: "#",
  },
  {
    text: "Community",
    href: "#",
  },
  {
    text: "Privacy Policy",
    href: "#",
  },
];

function Footer() {
  return (
    <section
      className={`${styles["primary-footer"]} | bg-neutral-900 text-neutral-100  padding-block-800`}
    >
      <div className={`container`}>
        <div className={`even-columns`}>
          <div>
            <a href="#">
              <svg className="logo" width={146} height={24}>
                <use xlinkHref={`${logo}#logo`}></use>
              </svg>
            </a>

            {/* Social links */}
            <ul
              className={`${styles["social-list"]}`}
              role="list"
              aria-label="Social links"
            >
              <li>
                <a aria-label="facebook" href="#">
                  <svg className={styles["social-icon"]}>
                    <use xlinkHref={`${socialIcons}#icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="youtube" href="#">
                  <svg className={styles["social-icon"]}>
                    <use xlinkHref={`${socialIcons}#icon-youtube`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="twitter" href="#">
                  <svg className={styles["social-icon"]}>
                    <use xlinkHref={`${socialIcons}#icon-twitter`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="pinterest" href="#">
                  <svg className={styles["social-icon"]}>
                    <use xlinkHref={`${socialIcons}#icon-pinterest`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="instagram" href="#">
                  <svg className={styles["social-icon"]}>
                    <use xlinkHref={`${socialIcons}#icon-instagram`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* footer navigation links */}
          <div>
            <nav className={styles["footer-nav"]}>
              <ul aria-label="Footer" role="list">
                {footerNavigationList.map((link) => (
                  <li key={link.text}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
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
