import { FunctionComponent } from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

interface ButtonProps {
  text: string;
  link?: string;
  small?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  text,
  small = false,
  link,
}) => {
  return (
    <button className={cx({ [styles.small]: small }) + " " + styles.button}>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          {text}
        </a>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
