import Projects from "../components/project"

export default function Project() {
    return (
      <div className={styles.projectWrapper}>
      <h1 className={styles.mainTitle}>PROJECT</h1>
      <Projects hideTitle={true}/>
      </div>
      
    );
  }
  