import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 75px;
  border-bottom: ${p => p.theme.borders.normal} rgba(236, 236, 236, 1);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40px;
  left: 0px;
  z-index: 1000;
`;
