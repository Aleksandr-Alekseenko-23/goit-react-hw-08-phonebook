import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media ${breakpoints.mobile} {
    width: 320px;
  }
  @media ${breakpoints.minTablet} {
    width: 768px;
  }
  @media ${breakpoints.desktop} {
    width: 1200px;
  }
`;
