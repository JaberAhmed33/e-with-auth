import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {instance} from "../../axios/config";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  

  const fetchData = async () => {
    const {data} = await instance.get("/products");

    setProducts(data?.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products[0]);
  

  return (
    <section className="card-container dark:!bg-slate-800 dark:!text-white">
      {
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }
    </section>
  )
}
