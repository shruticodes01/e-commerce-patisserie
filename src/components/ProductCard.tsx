import { card } from "../styles/global";
import type { ProductDataObj } from "../types/types";
import Button from "./Button";

export default function ProductCard({ product }: { product: ProductDataObj }) {
  return (
    <article className={``}>
      <div className={`${card.imageWrapper}`}>
        <img
          className={`${card.image}`}
          src={product.image_url}
          alt={product.name}
        />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          <span>{`${product.price} EUR`}</span>
          <span>{}</span>
        </p>
        <p>
          <span>{product.stock}</span>
          <span>{product.category}</span>
        </p>
        <div>
          <Button variant="addItem" />
          <Button variant="removeItem" />
          <Button variant="viewMore" />
        </div>
      </div>
    </article>
  );
}
