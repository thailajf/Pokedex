import React from 'react';
import * as fontAwesome from 'react-icons/fa';

import { Container } from './styles';

export default function Loading() {
  const Icon = fontAwesome.FaReact;
  return (
    <Container>
      <Icon size={80} color="gray" />
    </Container>
  );
}
