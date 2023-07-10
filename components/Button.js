import styles from "../styles/Button.module.css";

const Button = ({ text, id }) => {
  return (
    <button className={styles.button} id={id}>
      {text}
    </button>
  );
};

export default Button;
