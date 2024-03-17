import { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "./../Hamburgers/Hamburgers.style";

import {
  ProductCardContent,
  ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";

export default function Beverages() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const getCategories = async () => {
    const url = "http://localhost:8000/categories";
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setIsLoading(false);
  }

  const getBeverages = async () => {
    const url = "http://localhost:8000/beverages";
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);
  
  useEffect(() => {
    getBeverages();
  }, []);

  return (
    <Layout>
      <h1>飲み物 (Bebidas)</h1>
      <ProductCategories>
        {categories.map((item, index) => (
          <CategoryList key={index} data={item} />
        ))}
      </ProductCategories>
      <ProductWrapper>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductCardContent>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Button onClick={() => {}}>Adicionar</Button>
            </ProductCardContent>
            <ProductCardPrice>
              {priceFormat(product.value)}
            </ProductCardPrice>
            <img src={product.image} alt={product.title} />
          </ProductCard>
        ))}
      </ProductWrapper>
    </Layout>
  );
}