import { ProductProps } from "./Product.props"
import styles from "./Product.module.css"
import { Card } from "../Card/Card"
import { Tags } from "../Tags/Tags"
import { Rating } from "../Rating/Rating"
import { Button } from "../Button/Button"
import { priceRu } from "../../helpers/currencyHelper"
import { Divider } from "../Divider/Divider"
import { declinationOfNumber } from "../../helpers/declinationHelper"

export const Product = ({ product }: ProductProps): JSX.Element => {
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
        {product.oldPrice && (
          <Tags color="green" className={styles.margin}>
            {priceRu(product.price - product.oldPrice)}
          </Tags>
        )}
      </div>
      <div className={styles.credit}>
        <span>{priceRu(product.credit)}/мес</span>
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
        <span>
          {product.reviewCount}&ensp;
          {declinationOfNumber(product.reviewCount, [
            "отзыв",
            "отзыва",
            "отзывов",
          ])}
        </span>
      </div>
      <Divider className={styles.hr} />
      <div className={styles.description}>
        <p>{product.description}</p>
      </div>
      <div className={styles.features}>
        {product.characteristics.map((item) => (
          <div className={styles.characteristics} key={item.name}>
            <span className={styles.characteristicsName}>{item.name}</span>
            <span className={styles.characteristicsDots}></span>
            <span className={styles.characteristicsValue}>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance="primary" className={styles.buttonMargin}>
          Узнать подробнее
        </Button>
        <Button appearance="ghost" arrow="right">
          Узнать подробнее
        </Button>
      </div>
    </Card>
  )
}
