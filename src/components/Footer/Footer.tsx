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

const socialMediaLinks = [
  { platform: "facebook", iconId: "icon-facebook", href: "#" },
  { platform: "youtube", iconId: "icon-youtube", href: "#" },
  { platform: "twitter", iconId: "icon-twitter", href: "#" },
  { platform: "pinterest", iconId: "icon-pinterest", href: "#" },
  { platform: "instagram", iconId: "icon-instagram", href: "#" },
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
              {socialMediaLinks.map((link) => (
                <li>
                  <a aria-label={link.platform} href={link.href}>
                    <svg className={styles["social-icon"]}>
                      <use xlinkHref={`${socialIcons}#${link.iconId}`}></use>
                    </svg>
                  </a>
                </li>
              ))}
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
