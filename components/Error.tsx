import { IForcast } from "@/pages"
import styles from "./Error.module.css"

interface Props {
    data: IForcast
}

export const Error = ({data} : Props) => {
    return <div className={styles.error}>{data.error.message}</div>
}