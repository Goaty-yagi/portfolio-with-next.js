import { useForceUpdate } from "framer-motion";
import { useRouter } from "next/router";
import workData from "/components/workData";
import styles from "/styles/pages/projects/project.module.scss";

export default function ProjectPage() {
    const path = useRouter()
    console.log(path.query.slug)
    const project = workData.projectData.find((obj) => {
        return obj.title === path.query.slug
    })
    if (typeof window !== "undefined") {

    }
    console.log(project)
    // const {img, title, alt, description} = project
    return (
        <div className={styles.projectWrapper}>
        {project && (
            <>
            <div>{project.title}</div>
            <div>{project.productDescription}</div>
            </>
        )}
        {/* <div>unko</div> */}
        </div>
    )
}