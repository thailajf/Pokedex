import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../Styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: normal;
  letter-spacing: 9px;
  color: ${Colors.blue};

  span {
    font-size: 58px;
    font-weight: bold;
    color: ${Colors.red};
    margin: 0;
    padding: 0;
  }
`;
