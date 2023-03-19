import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSorts] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.value]: value,
    });
  };
  console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Por:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>azul</Option>
            <Option>negro</Option>
            <Option>amarillo</Option>
            <Option>blanco</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar Por:</FilterText>
          <Select onChange={(e) => setSorts(e.target.ariaValueText)}>
            <Option value="newest">Nuevo</Option>
            <Option value="asc">Precio mas alto</Option>
            <Option value="desce">Precio mas bajo</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
