import styles from '../styles/Equilizer.module.css'
import { motion } from 'framer-motion'

function Equilizer() {
  return (
    <div className={styles['equilizer-container']}>
      <motion.div
        animate={{ height: ['150px', '175px', '100px', '250px', '30px'] }}
        transition={{
          type: 'tween',
          repeat: Infinity,
          duration: 2,
          repeatType: 'reverse',
        }}
        className={`${styles.bar}`}></motion.div>
      <motion.div
        animate={{ height: ['30px', '150px', '175px', '100px', '200px'] }}
        transition={{
          type: 'tween',
          repeat: Infinity,
          duration: 2,
          repeatType: 'reverse',
        }}
        className={`${styles.bar}`}></motion.div>
      <motion.div
        animate={{ height: ['300px', '150px', '75px', '200px', '50px'] }}
        transition={{
          type: 'tween',
          repeat: Infinity,
          duration: 2,
          repeatType: 'reverse',
        }}
        className={`${styles.bar}`}></motion.div>
    </div>
  )
}
export default Equilizer
