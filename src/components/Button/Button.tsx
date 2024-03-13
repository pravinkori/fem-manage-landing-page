import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: string;
}

function Button({ children, type }: ButtonProps) {
  const buttonClasses = `${styles.button}${
    type === "inverted" ? ` ${styles.inverted}` : ""
  }`;

  return (
    <>
      <button className={buttonClasses} data-type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
