import styles from "./TopPage.module.css"
import { TopPageComponentProps } from "./TopPageComponent.props"

import { HhData, Htag, Tags } from "../../components"
import { Card } from "../../components/Card/Card"
import { TopLevelCategory } from "../../interfaces/page.interface"

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        <Tags size="m" color="grey">
          {products && products.length}
        </Tags>
        <span>Сортировка</span>
      </div>
      <div>
        {products &&
          products.map((item) => <div key={item._id}>{item.title}</div>)}
      </div>
      <div className={styles.Hhtitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tags size="m" color="red">
          hh.ru
        </Tags>
      </div>

      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  )
}
