import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const MainWrapper = styled.main`
  padding-top: 30px;
  padding-bottom: 30px;
  flex-grow: 1;
  @media ${breakpoints.desktop} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
