import styles from "./styles.module.css";

function Search({ keywords, setKeywords }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        value={keywords}
        placeholder="JS"
      />
    </div>
  );
}

export default Search;
