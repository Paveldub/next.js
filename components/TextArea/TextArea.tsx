import { TextAreaProps } from "./TextArea.props"
import styles from "./TextArea.module.css"
import cn from "classnames"

export const TextArea = ({
  className,
  placeholder,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <>
      <textarea
        className={cn(className, styles.textarea)}
        placeholder={placeholder}
        {...props}
      />
    </>
  )
}
