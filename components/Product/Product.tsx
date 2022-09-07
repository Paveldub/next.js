import { ProductProps } from "./Product.props"
import styles from "./Product.module.css"
import { Card } from "../Card/Card"
import { Tags } from "../Tags/Tags"
import { Rating } from "../Rating/Rating"
import { Button } from "../Button/Button"

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  console.log(product)
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />
      </div>
      <div className={styles.title}>
        <span>{product.title}</span>
      </div>
      <div className={styles.price}>
        <span>{product.price}</span>
      </div>
      <div className={styles.credit}>
        <span>{product.credit}</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((item) => (
          <Tags key={item} color="ghost">
            {item}
          </Tags>
        ))}
      </div>
      <div className={styles.priceTitle}>
        <span>цена</span>
      </div>
      <div className={styles.loan}>
        <span>в кредит</span>
      </div>
      <div className={styles.rateTitle}>
        <span>{product.reviewCount} отзывов</span>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.description}>
        <p>{product.description}</p>
      </div>
      <div className={styles.features}>
        <p>фичи</p>
      </div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>Недостатки</div>
          <div>{product.disadvantages && product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">
          Узнать подробнее
        </Button>
      </div>
    </Card>
  )
}
