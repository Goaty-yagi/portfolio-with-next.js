import Link from "next/link";
import styles from "/styles/components/footer.module.scss";

export default function Button({text, url}) {
    return(
        <div style={{
            color:"red"
        }} className={styles.btnContainer}>
            <Link href={url} scroll={false}>
                <button className={styles.btn}>
                    {text}
                </button>
            </Link>
        </div>
    )
} 