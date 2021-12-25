import { FunctionComponent } from "react";
import style from "./Contacts.module.scss";
interface ContactsProps {}

const Contacts: FunctionComponent<ContactsProps> = () => {
  return (
    <section className={style.section} id="contacts">
      <div className={style.wrapper}>
        <div className={style.title}>
          <h1>Contattami</h1>
          <h2>
            Parlami del tuo <span>prodotto</span> :
          </h2>
        </div>
        <iframe
          src="https://contact.nicolatoledo.dev/?hideTitle=1&transparentBackground=1&embed=1"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Build your product"
        ></iframe>
        <div className={style.email}>
          {/* <a className={style.link} href="mailto:hello@nicolatoledo.dev">
            hello@nicolatoledo.dev
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
