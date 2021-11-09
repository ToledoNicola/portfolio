import { FunctionComponent } from "react";
import Project from "../project";
import style from "./Projects.module.scss";
import portfolio from "public/projects/portfolio@full.png";
import angularpro from "public/projects/angularpro@full.png";
import caf from "public/projects/caf@full.png";
import leonard from "public/projects/leonard@full.png";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <section className={style.section} id="projects">
      <div className={style.elements__contained}>
        <div>
          <div className={style.title} id="title">
            <h1>Progetti</h1>
            <h2 className="subtitle">
              Alcuni dei miei ultimi <span>progetti</span> ...
            </h2>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.projectW}>
            <Project
              img={portfolio}
              title="Portfolio"
              stack="Next.js - React - Tailwindcss - Framer Motion"
              description={
                <p>
                  Il sito che stai vedendo in questo momento 😊. Volevo un sito
                  veloce e con una buona SEO per questo ho scelto Next.js,
                  inoltre è possibile generare html dai markdown, in questo modo
                  sara piu comodo aggiungere contenuti in futuro, e siccome ero
                  indeciso tra scuro e chiaro ho deciso di metterli entrambi.
                  per lo stile ho utilizzato Tailwindcss e classi custom, per le
                  grafiche ho usato {" "}
                  <a
                    className="link"
                    href="https://www.adobe.com/it/products/xd.html"
                  >
                    XD
                  </a>
                </p>
              }
            />
          </div>
          <div className={style.projectW}>
            <Project
              img={angularpro}
              reverse={true}
              title="Angular Il Corso"
              stack="angular - ngrx - rxjs - redux - firebase"
              description={
                <p>
                  Spinto dall&apos; ❤️ per Angular ho deciso di creare due
                  corsi, Angular ed Angular Pro. <br />
                  Nel Corso <em>Angular</em> partiamo dalle basi introducendo il
                  mondo front-end e l&apos;atomic design, fino ad utilizzare
                  tutti i principali strumenti che il framework ci mette a
                  disposizione.
                  <br />
                  Nel corso <em>Angular Pro</em> vediamo le principali strategie
                  per ottimizzare le performance, utilizzare Rxjs con alcuni
                  operatori ed in fine come possiamo strutturare un&apos;app
                  utilizzando il pattern redux, in particolare utilizzando NGRX
                  {/* per il programma completo visita il sito  */}
                </p>
              }
            />
          </div>
          <div className={style.projectW}>
            <Project
              title="Leonard System"
              img={leonard}
              stack="ionic - akita - Rxjs - firebase - serverless"
              description={
                <p>
                  Leonard è una startup innovativa nell&apos;ambito della
                  ristorazione ed il settore Ho.Re.Ca., Leonard System è
                  l&apos;innovativo assistente intelligente per la ristorazione,
                  permette di aumentare i guadagni del tuo ristorante,
                  migliorando la qualità della tua vita. Leoanrd Community
                  unisce aziende e clienti con il passaparola, se hai
                  un&apos;attivita ti porta clienti, se vuoi consigliare
                  un&apos;attivita ti paga
                </p>
              }
            />
          </div>
          <div className={style.projectW}>
            <Project
              title="Caf SportelloAmico"
              img={caf}
              reverse={true}
              stack="ionic - akita - rxjs"
              description={
                <p>
                  Caf SportelloAmico – FiscalWeb il 730 lo puoi fare online:
                  basta consegnare i tuoi documenti allo sportello virtuale e un
                  Operatore fiscale i seguirà la tua pratica, con le stesse
                  garanzie di un centro di assistenza fiscale. Mai più lunghe ed
                  interminabili attese allo sportello Mai più documenti sparsi
                  per casa e cartelline gonfie sulla tavola Nessuna
                  responsabilità per la compilazione perché è l’esperto fiscale
                  ad occuparsene Massima garanzia di privacy e sicurezza. il
                  progetto è stato realizzato in collaborazione con
                  <a
                    className="link"
                    href="https://www.quantos.it"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quantos
                  </a>
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
