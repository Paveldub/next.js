import styles from "./Tags.module.css"
import cn from "classnames"
import { TagsProps } from "./Tags.props"

export const Tags = ({
  children,
  size = "s",
  className,
  color = "ghost",
  href,
  ...props
}: TagsProps): JSX.Element => {
  return (
    <>
      <div
        className={cn(styles.tag, className, {
          [styles.s]: size == "s",
          [styles.m]: size == "m",
          [styles.ghost]: color == "ghost",
          [styles.red]: color == "red",
          [styles.grey]: color == "grey",
          [styles.green]: color == "green",
          [styles.primary]: color == "primary",
        })}
        {...props}
      >
        {href ? (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          <>{children}</>
        )}
      </div>
    </>
  )
}
