import Image from "next/image"
import styles from "../styles/home.module.scss"
import Work from "./component/project"

export default function Home() {
  const introText = "Hi, I'm Nobuhiro based in Melbourne."
  return (
    <div className={styles.pageProps}>
      <div className={styles.box}>
        <div className={styles.test}>{introText}</div>
      </div>
      <div className={styles.introContainer}>
        <div className={styles.myInfo}>
          <h2>Nobuhiro</h2>
          <h3>Entry-level Developer</h3>
        </div>
        <div className={styles.imgFlexBox}>
          <div className={styles.myImg}>
          <Image
            src="/me.jpeg" 
            alt="me"
            layout="fill"
            objectFit="contain"
          >
          </Image>
          </div>
        </div>
      </div>
      <div>
        something...
      </div>
      <Work/>
    </div>
  )
}