import styles from "../styles/home.module.scss"


export default function Home() {
  const introText = "Hi, I'm Nobuhiro based on Melbourne."
  return (
    <div className={styles.pageProps}>
      <div className={styles.box}>
        <div className={styles.test}>{introText}</div>
      </div>
      <div>
        <div>
          <h2>Nobuhiro</h2>
          <h3>Entry-level Developer</h3>
        </div>
        <div>
          <img></img>
        </div>
      </div>
      <div>
        something...
      </div>
    </div>
  )
}