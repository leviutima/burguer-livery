import { useNavigate } from "react-router-dom";
import { CategoryListElement } from "./CategoryList.style";

interface CategoryListProps {
  data: {
    text: string;
    link: string;
  };
}

export const CategoryList = ({ data }: CategoryListProps) => {
  const naviGate = useNavigate();
  const handleClick = () => {
    naviGate(data.link);
  };
  return <CategoryListElement onClick={handleClick}>{data.text}</CategoryListElement>;
};
