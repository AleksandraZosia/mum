import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Plans from "../components/Plans";
import Nav from "../components/Navigation";
import Steps from "../components/Steps";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.first}>
          <div className={styles.nav}>
            <Image
              src="/icon_home.svg"
              alt="Strona główna"
              height={21}
              width={24}
              className={styles.icon}
            />
            <Nav />
          </div>
          <div className={styles.header}>
            <h1>W każdym dziecku drzemie potencjał</h1>
            <h2>Pozwól mi pomóc go uwolnić</h2>
            <Button text={"Zamów darmową konsultację >>"} />
          </div>
        </div>
        <section className={styles.second} id="therapy">
          <div className={styles.therapy}>
            <h2>Terapia</h2>
            <h4>
              Mój główny cel to zapewnienie każdemu dziecku równych szans w
              nauce i rozwoju, pomimo specyficznych wyzwań związanych z
              neuroróżnorodnością, spektrum autyzmu czy zespołem Aspergera.
              Pracując z dzieckiem indywidualnie, uwzględniam jego unikalne
              predyspozycje, zdolności i zainteresowania. Staram się znaleźć
              metody nauki, które będą dla niego najbardziej efektywne i
              atrakcyjne.
            </h4>
            <h4>
              Wspieram dziecko w rozwijaniu umiejętności samoorganizacji,
              radzenia sobie z trudnościami w nauce oraz w budowaniu strategii
              uczenia.
            </h4>
          </div>
          <div className={styles.proccess}>
            <h2>Proces naszej współpracy w 3 krokach</h2>
            <Steps />
          </div>
        </section>
        <section className={styles.fourth} id="talents">
          <h2>Talenty</h2>
          <div className={styles.talents}>
            <div className={styles.text}>
              <p>
                Proces wspólnej nauki rozpoczynam od rozpoznania indywidualnych
                talentów dziecka. Każde dziecko ma swoje własne niezwykłe
                talenty. Test mocnych stron, opracowany przez instytut Gallupa,
                pomaga dzieciom odkryć, nazwać i rozwijać swoje naturalne
                umiejętności. Sam test stworzony jest z myślą o dzieciach w
                wieku od 10 do 14 lat, natomiast przeprowadzam go już z
                8-latkami, które otrzymują przy nim nieco więcej wsparcia.
              </p>
              <p>
                Test odkrywania talentów odbywa się podczas pierwszej, darmowej
                konsultacji i każde dziecko otrzymuje swój własny raport z
                opisem swoich mocnych stron. Na kolejnym spotkaniu omawiamy go
                wraz z rodzicami.
              </p>
              <Button text={"Zamów darmową konsultację >>"} />
            </div>
            <Image
              src="/cartoon_child.svg"
              alt="grafika przedstawiająca czytające dziecko"
              width={352}
              height={352}
              id={styles.reading_child}
            />
          </div>
        </section>
        <section className={styles.fifth} id="about">
          <h2>O mnie</h2>
          <div className={styles.about}>
            <Image
              src="/photo.svg"
              width={366}
              height={366}
              alt="Ewa Żenczykowska-Sawicka"
            />
            <p>
              Nazywam się Ewa Żenczykowska-Sawicka. Przez niemal czterdzieści
              lat pracowałam jako dyrektor szkoły i nauczycielka. Moja praca nie
              ogranicza się tylko do sali lekcyjnej - jestem również terapeutką
              dzieci z diagnozą autyzmu oraz zespołu Aspergera.
              <br></br>
              <br></br>
              Przez wiele lat zajmowałam się rewalidacją i różnymi formami
              wsparcia w nauce dzieci z tymi specyficznymi potrzebami. Moją
              misją jest odkrywanie odpowiednich metod nauki, które pomogą tym
              dzieciom osiągnąć pełen potencjał.
              <br></br>
              <br></br>
              Jestem znana z mojego zaangażowania i zaufania, jakim cieszę się
              zarówno u uczniów, jak i ich rodziców. Dzięki mojemu doświadczeniu
              i empatycznej postawie potrafię stworzyć indywidualne programy
              rewalidacyjne, dopasowane do potrzeb każdego z moich
              podopiecznych.
            </p>
          </div>
        </section>
        <section className={styles.sixth} id="prices">
          <h2>Cennik</h2>
          <h3>Pierwsze spotkanie konsultacyjne jest darmowe!</h3>
          <Plans />
        </section>
        <section className={styles.seventh}>
          <h2>Umów wizytę</h2>
          <Button text={"Umów się na darmową konsultację >>>"} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Stopka</p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
