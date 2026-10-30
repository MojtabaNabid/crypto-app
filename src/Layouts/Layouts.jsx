import styles from "./Layouts.module.css"

function Layouts({children}) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
            <a href="https://github.com/MojtabaNabid/crypto-app">My GitHub</a> | Nik Nabid
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Nik</p>
      </footer>
    </div>
  )
}

export default Layouts
