import { FunctionComponent } from "react";
import style from "./Contacts.module.scss";
interface ContactsProps {}

const Contacts: FunctionComponent<ContactsProps> = () => {
  return (
    <section className={style.section} id="contacts">
      <div className={style.wrapper}>
        <div className={style.title} >
          <h1>Contattami</h1>
          <h2>
            Se ti va di <span>parlare</span> puoi trovarmi qui:
          </h2>
        </div>
        <div className={style.email}>
          <a className={style.link} href="mailto:hello@nicolatoledo.dev">
            hello@nicolatoledo.dev
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
