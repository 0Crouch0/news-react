import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>News Reactify</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
}

export default Header;
