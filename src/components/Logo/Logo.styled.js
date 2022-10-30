import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const LogoText = styled.p`
  color: orange;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  @media ${breakpoints.minTablet} {
    font-size: 42px;
    margin-left: 15px;
  }
`;

export const Wrappen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextColor = styled.span`
  color: white;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  @media ${breakpoints.minTablet} {
    font-size: 42px;
  }
`;

export const LogoImg = styled.img`
  text-align: center;
`;
