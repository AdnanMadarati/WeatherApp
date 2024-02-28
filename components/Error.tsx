import { IWeather } from "@/pages"
import styles from "./Error.module.css"

interface Props {
    data: IWeather
}

export const Error = ({data} : Props) => {
    return <div className={styles.error}>{data.error.message}</div>
}