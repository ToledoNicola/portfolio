import Button from "components/Common/button";
import { FunctionComponent } from "react";
import style from "./Services.module.scss";
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
                  <span className="ev">Sviluppo</span>
                </h3>
                <p>
                  che tu sia un&apos;<em>azienda</em>, una <em>startup</em> o un {' '}
                  <em>privato</em>, il mio scopo è aiutarti a trovare soluzioni
                  e la strada migliore per arrivarci
                </p>
                <p>
                  Attraverso lo sviluppo &quot;classico&quot; oppure con
                  piattaforme no-code, per creare app veloci e belle
                  {/* per realizzare MVP 10x piu velocemente e
                  riducendo i costi di sviluppo fino al 70% */}
                </p>
              </div>
              <div className={style.card__button}>
                <Button text="preventivo gratuito" />
              </div>
            </div>
            <div className={style.card}>
              <div className={style.card__content}>
                <p className={style.card__emoji}>👨🏻‍🏫</p>
                <h3>
                  <span className="ev">Formazione</span>
                </h3>
                <p>
                  Collaboro con varie aziende e startup di educazione ed ho realizzato 2 workshop su Angular per le <em>aziende</em>, il
                  primo ha un focus iniziale per chi proviene dal backend e
                  vuole iniziare ad usare angular
                </p>
                <p>
                il secondo è rivolto ad un
                  team che gia usa angular ma vuole conoscere le best practice
                  per aumentare la produttività
                </p>
              </div>
              <div className={style.card__button}>
                <Button text="preventivo gratuito" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
