import styles from "/styles/components/project.module.scss";
import globalStyles from "/styles/components/global_components/text.module.scss";
import { FaGithubSquare } from "react-icons/fa";
import { BiRocket } from "react-icons/bi"
// import workData from "./workData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

class WorkObj {
  constructor(img, title, description, url) {
    this.img = img;
    this.title = title;
    this.description = description;
    this.url = url;
  }
}

export default function Project({hideTitle}) {
  const gitClick = (obj) => {
    window.open(obj.githubUrl);
  };
  const postClick = (obj) => {
    window.open(obj.postUrl);
  };
  const [workData, setData] = useState()
  useEffect(() => {
    setData([
      {
          "img": "/neko-japanese.png",
          "alt": "image",
          "title": "Neko-Japanese",
          "description": "This is my first project built with Vue-CLI and Django, might be published as a product.",
          "productDescription" : "Neko Japanese is a platform where learn Japanese, test and evaluate japanese knowledge, access viewable weakness and strong point in each component, community to discuss Japanese topics. Currently, this is for portfolio purpose, but might be published as a product.",
          "githubUrl": "https://github.com/Goaty-yagi/quiz_project",
          "postUrl": "https://neko-japanese.herokuapp.com/"
      },
      {
          "img": "/quiz-ranking-dojo.png",
          "alt": "image",
          "title": "Quiz-Ranking-Dojo",
          "description": `This is my final project in General Assembly development course.
          I built SPA from scratch to understand how SPA works, I believe that this experience definitely help my future-self
          when I learn new frameworks or libraries.
          `,
          "githubUrl": "https://github.com/Goaty-yagi/GA_SPA_Final_Project",
          "postUrl": "https://quiz-ranking-dojo.herokuapp.com/"
      }
  ])
  },[])
  let markup
  if(workData) {
    markup = workData.map((obj, index) => {
      return (
        <div className={styles.card} key={index}>
          {/* <Link href={"projects/" + obj.title} scroll={false} key={index}> */}
            
              <h3 className={styles.projectTitle}>{obj.title}</h3>
              <div className={styles.imageWrapper}>
                <Image
                  src={obj.img}
                  alt={obj.alt}
                  // className={styles.img}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 0"
                  // width="280px"
                  // height="150px"
                ></Image>
              </div>
              <div className={styles.articleWrapper}>
                <article>{obj.description}</article>
              </div>
              <div className={styles.iconWrapper}>
                <FaGithubSquare
                  className={styles.gitIcon}
                  onClick={() => gitClick(obj)}
                />
                <BiRocket
                  className={styles.gitIcon}
                  onClick={() => postClick(obj)}/>
              </div>
          {/* </Link> */}
        </div>
      );
    });
  }
  
  return (
    <section>
      {!hideTitle && (
        <h1 className={globalStyles.sectionH1}>Project</h1>
      )}
      <div className={styles.cardWrapper}>{markup}</div>
    </section>
  );
}
