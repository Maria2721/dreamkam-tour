import styles from "./Request.module.scss";

const Request = () => {
    return (
        <div className={styles.request}>
            <label>Имя участника</label>
            <input type="text" placeholder="Имя"/>
        </div>
    )
}

export default Request
