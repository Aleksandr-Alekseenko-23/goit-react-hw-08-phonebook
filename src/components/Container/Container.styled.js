import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media ${breakpoints.mobile} {
    min-width: 290px;
  }
`;
