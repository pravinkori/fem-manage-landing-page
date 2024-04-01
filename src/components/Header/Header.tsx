import { useEffect, useRef } from "react";
import logo from "/src/assets/images/logo.svg";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import closeIcon from "/src/assets/images/icon-close.svg";
import hamburgerIcon from "/src/assets/images/icon-hamburger.svg";

const headerNavigationList = [
  {
    text: "Pricing",
    href: "#",
  },
  {
    text: "About us",
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
  const primaryNavRef = useRef<HTMLElement>(null);
  const navToggleRef = useRef<HTMLButtonElement>(null);
  const primaryHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (primaryNavRef.current) {
        const isDataVisible =
          primaryNavRef.current.hasAttribute("data-visible");
        if (navToggleRef.current) {
          navToggleRef.current.setAttribute(
            "aria-expanded",
            isDataVisible ? "false" : "true"
          );
        }
        primaryNavRef.current.toggleAttribute("data-visible");
        if (primaryHeaderRef.current) {
          primaryHeaderRef.current.toggleAttribute("data-overlay");
        }
      }
    };

    if (navToggleRef.current) {
      navToggleRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (navToggleRef.current) {
        navToggleRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <header ref={primaryHeaderRef} className={styles["primary-header"]}>
      <div className={`container`}>
        <div className={styles["nav-wrapper"]}>
          <a href="#">
            <svg className="logo" width={146} height={24}>
              <use xlinkHref={`${logo}#logo`}></use>
            </svg>
          </a>
          <button
            ref={navToggleRef}
            className={styles["mobile-nav-toggle"]}
            aria-controls="primary-navigation"
            aria-expanded="false"
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
            ref={primaryNavRef}
            className={styles["primary-navigation"]}
            id="primary-navigation"
          >
            <ul
              aria-label="Primary"
              role="list"
              className={styles["nav-list"]}
              id="primary-navigation"
            >
              {headerNavigationList.map((link) => (
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
