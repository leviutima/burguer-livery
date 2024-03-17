import { useEffect, useState } from "react";
import { CategoryList, Layout } from "../../components";
import { ProductCategories } from "../Hamburgers/Hamburgers.style";
import { BotaoEntradinhas } from "./Appetizers.style";


import {
  ProductCardContent,
  ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";

export default function Appetizers() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState("small"); // Estado para armazenar os preços selecionados

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

  const getAppetizers = async () => {
    const url = "http://localhost:8000/appetizers";
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
    getAppetizers();
  }, []);

  const handlePriceChange = (index: number, price: string) => {
    setSelectedPrices({ selectedPrices, [index]: price }); // Atualizar o preço selecionado para o produto com o índice correspondente
  };

  return (
    <Layout>
      <h1>AS MELHORES ENTRADINHAS (Small e Large)</h1>
      <ProductCategories>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          categories.map((item, index) => (
            <CategoryList key={index} data={item} />
          ))
        )}
      </ProductCategories>
      <ProductWrapper>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index}>
              <ProductCardContent>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <BotaoEntradinhas>
                  <div>
                    <input
                      type="radio"
                      id={`small_${index}`}
                      value="small"
                      checked={selectedPrices[index] === "small"}
                      onChange={() => handlePriceChange(index, "small")}
                    />
                    <label htmlFor={`small_${index}`}>Small</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id={`large_${index}`}
                      value="large"
                      checked={selectedPrices[index] === "large"}
                      onChange={() => handlePriceChange(index, "large")}
                    />
                    <label htmlFor={`large_${index}`}>Large</label>
                  </div>
                </BotaoEntradinhas>
                <Button onClick={() => { }}>Adicionar</Button>
              </ProductCardContent>
              <ProductCardPrice>
                {priceFormat(
                  product.values[selectedPrices[index]]
                )}
              </ProductCardPrice>
              <img src={product.image} alt={product.title} />
            </ProductCard>
          ))
        )}
      </ProductWrapper>
    </Layout>
  );
}
