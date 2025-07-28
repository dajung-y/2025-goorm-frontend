import clsx from 'clsx'
import styles from './AlertCard.module.scss';

export default function AlertCard({type = 'info', children}) {
  return (
    <>
    <div className={clsx(
      styles.alert,
      styles[`alert-${type}`]
    )}>
      {children}
    </div>
    </>
  )
}
