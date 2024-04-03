import { useState } from "react";
import logo from "/src/assets/images/logo.svg";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import closeIcon from "/src/assets/images/icon-close.svg";
import hamburgerIcon from "/src/assets/images/icon-hamburger.svg";

const headerNavigationLinks = [
  {
    text: "Pricing",
    href: "#",
  },
  {
    text: "Product",
    href: "#",
  },
  {
    text: "About us",
    href: "#",
  },
  {
    text: "Community",
    href: "#",
  },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("isNavOpen state:", isNavOpen);
  };

  return (
    <header className={styles["primary-header"]} data-overlay={isNavOpen}>
      <div className={`container`}>
        <div className={styles["nav-wrapper"]}>
          <a href="#">
            <svg className="logo" width={146} height={24}>
              <use xlinkHref={`${logo}#logo`}></use>
            </svg>
          </a>
          <button
            className={styles["mobile-nav-toggle"]}
            aria-controls="primary-navigation"
            aria-expanded={isNavOpen}
            onClick={handleToggleNav}
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
          <nav
            className={`${styles["primary-navigation"]} ${
              isNavOpen ? styles["primary-navigation--open"] : ""
            }`}
            id="primary-navigation"
            data-visible={isNavOpen}
          >
            <ul
              aria-label="Primary"
              role="list"
              className={styles["nav-list"]}
              id="primary-navigation"
            >
              {headerNavigationLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <span className={`display-sm-none display-md-inline-flex`}>
            <Button>Get Started</Button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
