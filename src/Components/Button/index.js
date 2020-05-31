import React from 'react';
import * as fontAwesome from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Btn } from './styles';

export default function Button({ icon, size, color }) {
  const Icon = fontAwesome[icon];
  return (
    <Container>
      <Btn>
        <Icon size={size} color={color} />
      </Btn>
    </Container>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Button.defaultProps = {
  size: 25,
  color: ' gray',
};
