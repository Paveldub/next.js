import styles from "./TopPage.module.css"
import { TopPageComponentProps } from "./TopPageComponent.props"

import cn from "classnames"

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>
}
