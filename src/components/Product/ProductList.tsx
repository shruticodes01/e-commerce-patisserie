// import { productsData } from "../data/productsData.ts";
import { useEffect, useState } from "react";
import { card } from "../../styles/global.ts";
import ProductCard from "./ProductCard.tsx";
import type { ProductDataObj } from "../../types/types.ts";

export default function ProductList() {
  const [loadedDesserts, setLoadedDesserts] = useState([]);

  useEffect(() => {
    const fetchDesserts = async () => {
      const response = await fetch("http://localhost:5000/api/desserts");

      //  if(!response.ok){

      //  }

      //getting desserts from backend
      const desserts = await response.json();
      // update desserts on the UI once received
      setLoadedDesserts(desserts);
    };
    fetchDesserts();
  }, []);

  return (
    <ul className={`${card.cardsWrapper}`}>
      {loadedDesserts.map((dessert: ProductDataObj) => {
        console.log(dessert);

        return (
          <li className={`${card.cardWrapper}`} key={dessert.id}>
            <ProductCard dessert={dessert} />
          </li>
        );
      })}
    </ul>
  );
}
