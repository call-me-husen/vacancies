import { ReactNode } from "react";
import styles from "@/components/common/Button/style.module.css";

interface IButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}
export default function Button({
  disabled,
  children,
  onClick,
  type = "button",
  variant = "primary",
}: IButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
