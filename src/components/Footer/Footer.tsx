import logo from "/src/assets/images/logo.svg";
import styles from "./Footer.module.css";
import Button from "../Button/Button";
import socialIcons from "/src/assets/images/social-icons.svg";

const footerNavigationLinks = [
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
        <div className={`${styles["primary-footer-wrapper"]}`}>
          <div className={`${styles["primary-footer-logo-social"]}`}>
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
              {socialMediaLinks.map(({ iconId, platform, href }) => (
                <li key={iconId}>
                  <a aria-label={platform} href={href}>
                    <svg className={styles["social-icon"]}>
                      <use xlinkHref={`${socialIcons}#${iconId}`}></use>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* footer navigation links */}
          <div className={`${styles["primary-footer-nav"]}`}>
            <nav className={styles["footer-nav"]}>
              <ul aria-label="Footer" role="list">
                {footerNavigationLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={`${styles["primary-footer-form"]}`}>
            <form action="">
              <input type="text" placeholder="updates in your inbox" />
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
