import styled from "styled-components";
import {mobile} from "../responsive"
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Marvel-VS-DC-Strongest-Heroes.png") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;    
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;
const Form = styled.form`
    Display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.div`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;



const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREA UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirma tu contraseña" />
          <Agreement>
            Aceptar terminos y condiciones para el uso de datos personales
          </Agreement>
          <Button>CREAR CUENTA</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
