import styles from "/styles/project.module.scss";
import { FaGithubSquare } from "react-icons/fa";
import workData from "./workData";
import Image from "next/image";
import { useRef } from "react";

class WorkObj {
    constructor(img, title, description, url) {
        this.img = img
        this.title = title
        this.description = description
        this.url = url
    }
}


export default function Project() {
  let refs = useRef(null)
  console.log(Array.isArray(workData),workData)
  const iconClick = (e) => {
    console.log("clicked",e)
    window.open(obj.githubUrl)
  }
  const markup = workData.projectData.map((obj, index) => {
    return (
      <div className={styles.card} key={index}>
        <h3 className={styles.projectTitle}>{ obj.title }</h3>
        <div className={styles.imageWrapper}>
          <Image 
            src={obj.img} 
            alt={obj.title} 
            className={styles.img}
            width="280px" 
            height="150px">
          </Image>
        </div>
        <div className={styles.articleWrapper}>
          <article>
          { obj.description }
          </article>
        </div>
        <div  
          style={{
            "textAlign": "center"
          }}
        >
          <FaGithubSquare
            className={styles.gitIcon}
            style={{
            "fontSize": "3rem",
            }}
          onClick={(e) => iconClick(e)}/>
        </div>
      </div>
    )
  })
  console.log(refs)
  return (
    <section>
      <h1>Project</h1>
      <div className={styles.cardWrapper}>
        {markup}
      </div>
    </section>
  );
}