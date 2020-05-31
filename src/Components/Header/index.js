import React from 'react';


import { Container, Title, LinkHome } from './styles';

export default function Header() {
  return (
    <Container>
      <LinkHome to="/">
        <Title>
          <span>P</span>okedéx
        </Title>
      </LinkHome>
    </Container>
  );
}
