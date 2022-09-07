import { SortEnum, SorthProps } from "./Sort.props"
import styles from "./Sort.module.css"
import cn from "classnames"

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SorthProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <svg
          width="20"
          height="13"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.sortIcon}
        >
          <rect width="20" height="3" rx="1.5" fill="#7653FC" />
          <rect y="5" width="14" height="3" rx="1.5" fill="#7653FC" />
          <rect y="10" width="8" height="3" rx="1.5" fill="#7653FC" />
        </svg>
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <svg
          width="20"
          height="13"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.sortIcon}
        >
          <rect width="20" height="3" rx="1.5" fill="#7653FC" />
          <rect y="5" width="14" height="3" rx="1.5" fill="#7653FC" />
          <rect y="10" width="8" height="3" rx="1.5" fill="#7653FC" />
        </svg>
        По&nbsp;цене
      </span>
    </div>
  )
}
