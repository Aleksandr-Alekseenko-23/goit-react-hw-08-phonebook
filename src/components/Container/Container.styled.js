import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media ${breakpoints.mobile} {
    min-width: 320px;
  }
  @media ${breakpoints.maxMobile} {
    max-width: 767px;
  }
  @media ${breakpoints.minTablet} {
    min-width: 768px;
  }
  @media ${breakpoints.maxTablet} {
    max-width: 1199px;
  }
  @media ${breakpoints.desktop} {
    width: 1200px;
  }
`;
