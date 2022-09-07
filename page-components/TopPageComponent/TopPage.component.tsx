import styles from "./TopPage.module.css"
import { TopPageComponentProps } from "./TopPageComponent.props"

import { HhData, Htag, Sort, Tags } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"
import { Advantages } from "../../components/Advantages/Advantages"
import { SortEnum } from "../../components/Sort/Sort.props"
import { useReducer } from "react"
import { sortReducer } from "./sort.reducer"

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  )

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        <Tags size="m" color="grey">
          {sortedProducts && products.length}
        </Tags>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((item) => <div key={item._id}>{item.title}</div>)}
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

      {page.seoText && (
        <div
          className={styles.seoText}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
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
