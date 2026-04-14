import { card } from "../styles/global";
import type { ProductDataObj } from "../types/types";
import Button from "./Button";

export default function ProductCard({ dessert }: { dessert: ProductDataObj }) {
  return (
    <article className={``}>
      <div className={`${card.imageWrapper}`}>
        <img
          className={`${card.image}`}
          src={dessert.image_url}
          alt={dessert.name}
        />
      </div>
      <div className={card.content}>
        <h3 className={`${card.title}`}>{dessert.name}</h3>
        <p className={`${card.description}`}>{dessert.description}</p>
        <p className={card.priceRatingContainer}>
          <span className={`${card.price}`}>{`${dessert.price} EUR`}</span>
          <span>{}</span>
        </p>
        <p className={`${card.stockCategoryContainer}`}>
          <span className={`${card.stock}`}>{dessert.stock}</span>
          <span className={`${card.category}`}>{dessert.category}</span>
        </p>
        <div className={`flex justify-between`}>
          <Button className={``} variant="addItem" label="Add To Cart" />
          {/* <Button variant="removeItem" /> */}
          <Button className={``} variant="viewDetails" label="View Details" />
        </div>
      </div>
    </article>
  );
}
