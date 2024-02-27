import styles from "./Footer.module.css"

interface Props {
    children: JSX.Element
}

export const Footer = ({children}: Props) => {
    return <div className={styles.footer}>{children}</div>
}