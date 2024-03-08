import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  inverted?: boolean;
}

function Button({ children, inverted }: ButtonProps) {
  let themeColor;
  let buttonClass = "button";

  if (inverted) {
    buttonClass += "inverted";
  }

  return (
    <>
      <button
        className={buttonClass}
        style={{
          cursor: "pointer",
          border: 0,
          borderRadius: "100vmax",
          padding: "1.25em 2.5em",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-button)",
          lineHeight: 1,
          color: inverted ? themeColor : "var(--clr-neutral-100)",
          backgroundColor: inverted ? "var(--clr-neutral-100)" : themeColor,
          boxShadow: "0 1.125em 1em -1em " + themeColor,
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
