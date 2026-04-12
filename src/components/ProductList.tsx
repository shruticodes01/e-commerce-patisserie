import { productsData } from "../data/productsData.ts";
import { card } from "../styles/global.ts";
import ProductCard from "./ProductCard.tsx";

export default function ProductList() {
  return (
    <ul className={`${card.cardsWrapper}`}>
      {productsData.map((product) => {
        console.log(product);

        return (
          <li className={`${card.cardWrapper}`} key={product.id}>
            <ProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
}
