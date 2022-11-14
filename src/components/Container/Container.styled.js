import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  padding-left: ${p => `${p.theme.space[4]}px`};
  padding-right: ${p => `${p.theme.space[4]}px`};
  @media ${breakpoints.mobile} {
    min-width: ${p => `${p.theme.space[5] * 9}px`};
  }
`;
