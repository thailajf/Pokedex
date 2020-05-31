import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../Styles/ScreenSize';
import { Colors } from '../../Styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  max-height: 400px;
  min-height: 320px;
  height: 50%;
  margin: 20px 10px;
`;

export const Image = styled.img`
  max-width: 300px;
  width: 100%;
  max-height: 200px;
  min-height: 200px;
`;

export const Name = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  font-family: 'Roboto', sans-serif;
  color: ${Colors.blue};
  font-size: 22px;
  font-weight: bolder;
  text-transform: capitalize;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  padding: 10px 30px;
  margin: 10px 50px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  max-height: 300px;
  min-height: auto;
  align-items: center;
`;

export const DataContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 10px;
`;

export const Title = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  font-family: 'Roboto', sans-serif;
  color: ${Colors.red};
  letter-spacing: 0.4px;
  font-weight: bold;
`;

export const BtnContainer = styled.div`
  position: relative;
`;

export const BackContainer = styled(Link)`
  position: relative;
  float: left;
  right: 500px;
  @media ${device.tablet} {
    right: 0px;
  }
`;
