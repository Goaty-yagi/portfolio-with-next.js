import Link from "next/link";
import styles from "/styles/components/footer.module.scss";

export default function Button({text, url}) {
    return(
        <div className={styles.btnContainer}>
            {/* <Link href={url}> */}
                <button className={styles.btn}>
                    {text}
                </button>
            {/* </Link> */}
        </div>
    )
} 