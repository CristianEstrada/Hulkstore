import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive"

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://hips.hearstapps.com/hmg-prod/images/marvel-gifts-index-image-1665410889.jpg?crop=0.502xw:1.00xh;0,0&resize=980:*" />
        </ImgContainer>
        <InfoContainer>
          <Title>Producto</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            quisquam autem perferendis ea quas culpa repellat similique!
            Possimus minus, fugiat molestias soluta sapiente dicta omnis
            doloribus quaerat, quibusdam animi asperiores.
          </Desc>
          <Price>20.000 $</Price>
          <AddContainer>
            <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
                <Button>Agregar al Carrito</Button>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
