import styled from 'styled-components';
import { breakpoints } from '../../components/Utils/Breakpoints';
import notFound from '../../Assets/img/not-found.jpg';
import { Link } from 'react-router-dom';

export const StyledImage = styled.div`
  background-image: url(${notFound});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const Div = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  display: flex;
  top: 50px;
  align-items: center;
  color: #fc842d;
  font-size: 25px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #7ddec1;
  }

  @media ${breakpoints.minTablet} {
    display: flex;
    font-size: 35px;
  }
`;
