import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Productos</Title>
      <FilterContainer>
        <Filter>
            <FilterText>
                Filtrar Por:
            </FilterText>
            <Select>
                <Option disabled selected>Todos</Option>
                <Option >Gorras</Option>
                <Option >Vasos</Option>
                <Option >Comics</Option>
            </Select>
            <Select>
                <Option disabled selected>Todos</Option>
                <Option >Marvel</Option>
                <Option >DC</Option>
                <Option >otros</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>
                Ordenar Por:
            </FilterText>
            <Option selected>Nuevo</Option>
            <Option>Precio mas alto</Option>
            <Option>Precio mas bajo</Option>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  )
}

export default ProductList
