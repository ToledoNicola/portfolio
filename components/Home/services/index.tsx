import Button from "components/Common/button";
import { FunctionComponent } from "react";
import style from "./Services.module.scss";
import Link from "next/link";
interface ServicesProps {}

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <section className={style.section} id="services">
      <div className={style.container}>
        <div className={style.title}>
          <h1>Servizi</h1>
          <h2 className="subtitle">
            Puoi <span>contattarmi</span> per ...
          </h2>
        </div>
        <div className={style.body}>
          <div className={style.body__grid}>
            <div className={style.card}>
              <div className={style.card__content}>
                <p className={style.card__emoji}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="96"
                    height="96"
                    viewBox="0 0 48 48"
                    style={{ fill: "#000000", margin: "auto" }}
                  >
                    <circle cx="24" cy="24" r="20" fill="#1976d2"></circle>
                    <path
                      fill="#fff"
                      d="M30.1,21.43c0,0-1.73,5.42-1.86,5.88c-0.05-0.46-1.31-10.2-1.31-10.2c-2.95,0-4.52,2.09-5.35,4.32 c0,0-2.1,5.44-2.27,5.9c-0.01-0.43-0.32-5.84-0.32-5.84c-0.18-2.72-2.66-4.37-4.67-4.37l2.42,14.76c3.09-0.01,4.75-2.1,5.62-4.32 c0,0,1.85-4.8,1.93-5.02c0.02,0.21,1.33,9.34,1.33,9.34c3.09,0,4.76-1.96,5.66-4.1l4.32-10.67C32.54,17.11,30.93,19.2,30.1,21.43z"
                    ></path>
                  </svg>
                </p>

                <h3>
                  <span className="ev">Sviluppo Webflow</span>
                </h3>
                <p>
                  che tu sia un&apos;<em>azienda</em> o una <em>startup</em>{" "}
                  posso convertire i tuoi file Figma,XD o Sketch in un progetto
                  <em>Webflow pixel perfect.</em>
                  {/* il mio scopo è aiutarti a trovare{" "}
                  <em>SOLUZIONI</em> e la strada migliore per arrivarci */}
                </p>
                <p>
                  Se non hai il design posso aiutarti lo stesso grazie al mio
                  network di professionisti, per creare il miglior prodotto che
                  tu possa immaginare ✨
                  {/* Attraverso lo sviluppo &quot;classico&quot; oppure con
                  piattaforme no-code, per creare app veloci e belle che
                  semplificano la vita delle persone */}
                  {/* per realizzare MVP 10x piu velocemente e
                  riducendo i costi di sviluppo fino al 70% */}
                </p>
              </div>
              <Link href="/#contacts">
                <a className={style.link}>
                  <div className={style.card__button}>
                    <Button text="preventivo gratuito" />
                  </div>
                </a>
              </Link>
            </div>
            <div className={style.card}>
              <div className={style.card__content}>
                <p className={style.card__emoji}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="96"
                    height="96"
                    viewBox="0 0 48 48"
                    style={{ fill: "#000000", margin: "auto" }}
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
                <h3>
                  <span className="ev">Sviluppo Notion</span>
                </h3>
                <p>
                  Notion è uno degli strumenti che ha cambiato il modo di
                  gestire i documenti e progetti
                </p>
                <p>
                  Grazie alla sua semplicita puoi gestire il tuo sito in totale
                  autonomia, ogni modifica che farai nella tua pagina Notion si
                  vedra in automatico sul tuo sito 🚀
                </p>
                {/* <p>
                  ed ho realizzato 2 workshop su Angular per le <em>aziende</em>
                  , il primo ha un focus iniziale per chi proviene dal backend e
                  vuole iniziare ad usare angular il secondo è rivolto ad un
                  team che gia usa angular ma vuole conoscere le best practice
                  per aumentare la produttività
                </p> */}
              </div>
              <Link href="/#contacts">
                <a className={style.link}>
                  <div className={style.card__button}>
                    <Button text="preventivo gratuito" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
