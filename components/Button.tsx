import { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text:string
}
 
const Button: FunctionComponent<ButtonProps> = ({text}) => {
    return  <button className={styles.button}>{text}</button> ;
}
 
export default Button;