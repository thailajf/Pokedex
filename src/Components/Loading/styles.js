import styled, { keyframes } from 'styled-components';

const rotate = keyframes`

from{
transform : rotate(0deg);
}
to{
transform :rotate(360deg)}
`;

export const Container = styled.div`
  svg {
    margin: 30px 0px;
    animation-name: ${rotate};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;
