import styled from "styled-components"
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
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;
const Form = styled.form`
    Display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.div`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>INICIAR SESION</Title>
        <Form>
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Contraseña" />
          <Button>INGRESAR</Button>
          <Link>NO RECUERDAS TU CONTRASEÑA CLICK AQUI?</Link>
          <Link>CREA UNA NUEVA CUENTA</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
