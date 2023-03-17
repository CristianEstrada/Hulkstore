import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Footer/>
    </Container>
  )
}

export default Product
