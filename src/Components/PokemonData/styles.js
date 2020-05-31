import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DataList = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 10px;
`;

export const Label = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  font-family: 'Roboto', sans-serif;
  color: gray;
  letter-spacing: 0.3px;
  margin-right: 3px;
  text-transform: capitalize;
`;

export const Data = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  font-family: 'Roboto', sans-serif;
  color: ${Colors.blue};
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;
