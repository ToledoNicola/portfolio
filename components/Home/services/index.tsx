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
                <p className={style.card__emoji}>👨🏻‍💻</p>

                <h3>
                  <span className="ev">Sviluppo Webflow</span>
                </h3>
                <p>
                  che tu sia un&apos;<em>azienda</em>, una <em>startup</em> o un{" "}
                  <em>privato</em>, posso convertire i
                  tuoi file Figma,XD o Sketch in un progetto Webflow pixel perfect.
                  {/* il mio scopo è aiutarti a trovare{" "}
                  <em>SOLUZIONI</em> e la strada migliore per arrivarci */}
                </p>
                <p>
                  Se non hai il design posso
                  aiutarti lo stesso grazie al mio network di professionisti,
                  per creare il miglior prodotto che tu possa immaginare ✨
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
                <p className={style.card__emoji}>𝍌</p>
                <h3>
                  <span className="ev">Sviluppo Notion</span>
                </h3>
                <p>
                  Notion è uno degli strumenti che ha cambiato il modo di gestire i documenti e progetti
                </p>
                <p>
                  Grazie alla sua semplicita puoi gestire il tuo sito in totale autonomia, ogni modifica che farai nella tua pagina Notion si vedra in automatico sul tuo sito 🚀
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
