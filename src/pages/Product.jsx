import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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

`;
const AmountContainer = styled.div`

`;
const Amount = styled.p`

`;
const Button = styled.button`

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
