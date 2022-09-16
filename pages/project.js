import Projects from "../components/project"
import styles from "../styles/pages/projects.module.scss";

export default function Project() {
    return (
      <div className={styles.projectWrapper}>
      <h1 className={styles.mainTitle}>PROJECT</h1>
      <Projects hideTitle={true}/>
      </div>
      
    );
  }
  