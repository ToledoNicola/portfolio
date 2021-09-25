import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div id="logo">
          <Image src="/logo-min-bianco.png" alt="Logo" width={72} height={16} />
        </div>

        <ul className="links">
          <li>Chi sono</li>
          <li>Servizi</li>
          <li>Progetti</li>
          <li>
            <a
              href="https://training.nicolatoledo.dev/"
              rel="noreferrer"
              target="_blank"
            >
              Formazione
            </a>
          </li>
          <li>Contatti</li>
          <li className="text-yellow">
            <a
              href="https://blog.nicolatoledo.dev/"
              rel="noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
