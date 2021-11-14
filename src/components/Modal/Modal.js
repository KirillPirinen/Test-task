import styles from "./styles.module.css";

export const Modal = ({visible, children, deactivate}) => {
  return (
    <div onClick={deactivate} className={`${styles['modal-wrapper']} ${visible && styles.active}`}>
        <div onClick={e => e.stopPropagation()} className={styles['modal-content']}>
          {visible && children}
        </div>
    </div>
  )
}
