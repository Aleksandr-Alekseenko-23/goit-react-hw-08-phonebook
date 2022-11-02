import styled from 'styled-components';

export const HeaderWrappen = styled.header`
  border-bottom: 1px solid rgba(236, 236, 236, 1);
`;

export const Wrappen = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translatey(0);
  transition: transform 300ms;
  top: 40px;
  left: 0px;
`;
