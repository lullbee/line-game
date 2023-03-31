import styles from './Line2.module.scss'
const Line2 = ({row, col, owner, axis}) => {


  return (
    <article className={styles.wrapper}>
      <span className={styles.line} />
    </article>
  )

}

export default Line2;