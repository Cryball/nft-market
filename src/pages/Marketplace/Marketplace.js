import React from 'react'
import Header from '../../components/Header/Header'
import ItemsList from '../../components/ItemsList/ItemsList'
import Container from "@mui/material/Container";
import Footer from '../../components/Footer/Footer';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

export function Marketplace() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        Hello from marketplace
        <ItemsList>{items}</ItemsList>
      </Container>
      <Footer />
    </div>
  )
}
