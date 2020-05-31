import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';
import Btn from '../../Components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px 10px;
`;

export const Pokemon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  max-width: 290px;
  width: 100%;
  max-height: 250px;
  min-height: 210px;
  height: 50%;
  margin: 10px 10px;
  cursor: pointer;
  :hover {
    border: solid 1px gray;
  }
`;

export const Name = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  text-transform: capitalize;
  font-size: 17px;
  color: ${Colors.blue};
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const Image = styled.img`
  max-width: 180px;
  width: 100%;
  max-height: 150px;
  min-height: 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled(Btn)`
  display: flex;
  flex-direction: row;
`;

export const BtnContainer = styled.div``;
