import { FunctionComponent } from "react";
import style from "./About.module.scss";
import Link from "next/link";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <section className={style.section} id="about">
      <div className={style.container}>
        <div className={style.title}>
          <h1>Chi sono</h1>
          <h2 className={style.subtitle}>
            Se ti stai <span>chiedendo</span> chi sono ...
          </h2>
        </div>
        <div className={style.body}>
          <p>
            Mi chiamo <span className="ev">Nicola Toledo</span> ,e sono uno
            sviluppatore Front-end & Trainer di
            <span className="ev">Roma</span>
          </p>
          <p>
            {/* 2 mesi dopo il diploma in <em>&quot;Informatica&quot;</em>, ho */}
            Ho iniziato a lavorare come sviluppatore back-end con php e mysql,
            pero dopo 2 anni non sentivo più gli stessi stimoli che avevo
            all&apos;inizio, volevo provare e sperimentare altri campi,
            conoscere nuove tecnologie e girare il 🌎 con il mio 💻
          </p>
          <p>
            cosi decisi di lasciare quel lavoro ed iniziai un Master in
            <span className="ev">Web and Mobile Development</span>, per
            <em>due mesi</em> ogni giorno, <em>8 ore al giorno</em>, siamo
            partiti da <em>Html</em> e <em>Css</em> poi <em>Bootstrap</em>,{" "}
            <em>PHP</em>,<em>Mysql</em> , <em>JavaScript</em>, <em>Node.js</em>{" "}
            con
            <em>Express</em> , <em>Angular</em>, <em>Mongodb</em> , sviluppo app
            native <em>ios</em> con swift ed <em>android</em>.
          </p>
          <p>
            una volta finito il master aprii la mia partita iva ed iniziai a
            lavorare in molti progetti principalmente lato front-end e
            serverless con
            <span className="ev">Angular</span> e{" "}
            <span className="ev">Firebase</span>, nel frattempo iniziai a
            lavorare come docente freelance e creai il mio{" "}
            <Link href="https://training.nicolatoledo.dev/">
              <a className="link">workshop Angular</a>
            </Link>{" "}
            per aziende.
          </p>
          <p>
            oltre alla programmazione &quot;classica&quot; utilizzo piattaforme{" "}
            <em>no/low code</em> come Webflow, Notion, Framer per sviluppare una
            o piu parti in modo visuale.
            {/* (se vuoi
            saperne di più visita il mio{" "}
            <a
              className="link"
              href="https://blog.nicolatoledo.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
            ) */}
          </p>
          <p>
            Dal 2020 mi sono innamorato di <span className="ev">Next.js</span> e{" "}
            <span className="ev">Notion</span>, il primo è un framework react,
            per creare applicazioeni web <em>veloci</em> e <em>performanti</em>,
            mentre il secondo è uno strumento no-code basato su pagine e
            database per oganizzare qualsiasi cosa.
          </p>

          <p>
            Tutto questo mi ha dato la possibilita di diventare un
            <span className="ev"> nomade digitale </span> e viaggiare in
            bellissimi posti come:
          </p>
          <p>
            <em>Grecia</em> 🇬🇷, <em>Francia</em> 🇫🇷, <em>Austria</em> 🇦🇹,
            <em>Slovacchia</em> 🇸🇰, <em>Spagna</em> 🇪🇸, <em>Irlanda</em> 🇮🇪,
            <em>Giappone</em> 🇯🇵 , <em>Sudafrica</em> 🇿🇦, <em>Thailandia</em>
            🇹🇭
          </p>
          <p>
            sul mio account{" "}
            <a
              className="link"
              href="https://www.instagram.com/nicolatoledo.dev/"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>{" "}
            puoi vedere alcune foto 🌅
          </p>
          {/* <instagram-widget
          username="@nicolatoledo.dev"
          grid="3x3"
          shadows="type1"
          border-spacing="3%"
          items-limit="12"
          mouse-hover="type1"
          force-square="no"
        ></instagram-widget> */}

          <h2>
            Il mio attuale <span className="ev">stack</span> di
            <span className="ev">tecnologie/linguaggi</span> è:
          </h2>
          <p className={style.stack}>
            SASS - TAILWIND - JAVASCRIPT - TYPESCRIPT - NEXT.JS - ANGULAR -
            REACT - RXJS - FIREBASE - IONIC - GIT - WEBFLOW - NOTION
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
