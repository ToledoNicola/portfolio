import { FunctionComponent } from "react";
import style from "./Card.module.scss";

interface CardProps {}

const Card: FunctionComponent<CardProps> = () => {
  return (
    <div className={style.card}>
      <h3>
        <span className="ev">Giorno 1</span>
      </h3>
      <ul>
        <li>Atomic design</li>
        <li>Introduzione ad Angular</li>
        <li>Principali novità in ES6</li>
        <li>Introduzione a TypeScript</li>
        <li>Architettura di un’applicazione Angular</li>
        <li>Utilizzo dell&apos; Angular-cli</li>
      </ul>
    </div>
  );
};

export default Card;
