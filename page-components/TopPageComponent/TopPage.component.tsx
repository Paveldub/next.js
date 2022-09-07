import styles from "./TopPage.module.css"
import { TopPageComponentProps } from "./TopPageComponent.props"

import { HhData, Htag, Tags } from "../../components"
import { Card } from "../../components/Card/Card"
import { TopLevelCategory } from "../../interfaces/page.interface"
import { Advantages } from "../../components/Advantages/Advantages"

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  console.log(page.tags)
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

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      <div className={styles.tagStyle}>
        {page?.tags.map((item) => (
          <Tags key={item} color="primary">
            {item}
          </Tags>
        ))}
      </div>
    </div>
  )
}
