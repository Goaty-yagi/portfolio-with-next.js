import styles from "/styles/components/project.module.scss";
import globalStyles from "/styles/components/global_components/text.module.scss";
// import { FaGithubSquare } from "react-icons/fa";
// import { BiRocket } from "react-icons/Bi";
import workData from "./workData";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

class WorkObj {
  constructor(img, title, description, url) {
    this.img = img;
    this.title = title;
    this.description = description;
    this.url = url;
  }
}

export default function Project({ hideTitle }) {
  const gitClick = (obj) => {
    window.open(obj.githubUrl);
  };
  const postClick = (obj) => {
    window.open(obj.postUrl);
  };
  // const markup = workData.projectData.map((obj, index) => {
  //   return (
  //     <div className={styles.card} key={index}>
  //       {/* <Link href={"projects/" + obj.title} scroll={false} key={index}> */}

  //       <h3 className={styles.projectTitle}>{obj.title}</h3>
  //       <div className={styles.imageWrapper}>
  //         <Image
  //           src={obj.img}
  //           alt={obj.alt}
  //           // className={styles.img}
  //           layout="fill"
  //           objectFit="cover"
  //           objectPosition="50% 0"
  //           // width="280px"
  //           // height="150px"
  //         ></Image>
  //       </div>
  //       <div className={styles.articleWrapper}>
  //         <article>{obj.description}</article>
  //       </div>
  //       <div className={styles.iconWrapper}>
  //         <FaGithubSquare
  //           className={styles.gitIcon}
  //           onClick={() => gitClick(obj)}
  //         />
  //         <BiRocket className={styles.gitIcon} onClick={() => postClick(obj)} />
  //       </div>
  //       {/* </Link> */}
  //     </div>
  //   );
  // });
  return (
    <section>
      {!hideTitle && <h1 className={globalStyles.sectionH1}>Project</h1>}
      {/* <div className={styles.cardWrapper}>{markup}</div> */}
    </section>
  );
}
