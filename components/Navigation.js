import Image from "next/image";
import styles from "../styles/Navigation.module.css";
const Nav = () => {
  const scrollToView = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.nav}>
      <Image
        src="/icon_home.svg"
        alt="Strona główna"
        height={21}
        width={24}
        className={styles.icon}
      />
      <div className={styles.navoptions}>
        <a onClick={(e) => scrollToView(e, "therapy")}>TERAPIA</a>
        <a onClick={(e) => scrollToView(e, "talents")}>TALENTY</a>
        <a onClick={(e) => scrollToView(e, "about")}>O MNIE</a>
        <a onClick={(e) => scrollToView(e, "prices")}>CENNIK</a>
        <a>KONTAKT</a>
      </div>
    </div>
  );
};
export default Nav;
