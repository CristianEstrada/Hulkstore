import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const ContactItem = styled.p``

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>HulkStore</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          laborum cupiditate iure molestiae consectetur repellendus in eaque?
          Sapiente illum deleniti ipsam cum saepe adipisci minima. Aliquid atque
          nobis aliquam dolorum.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces de interes</Title>
        <List>
          <ListItem>Accesorios</ListItem>
          <ListItem>Camisetas</ListItem>
          <ListItem>Ventas rapidas</ListItem>
          <ListItem>Vasos</ListItem>
          <ListItem>Gorras</ListItem>
        </List>

      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room/>
          Accesorios y comics hulkstore
        </ContactItem>
        <ContactItem>
          <Phone/>
          +57 1234567890
        </ContactItem>
        <ContactItem>
          <MailOutline/>
          ventas@hulkstore.com.co
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
