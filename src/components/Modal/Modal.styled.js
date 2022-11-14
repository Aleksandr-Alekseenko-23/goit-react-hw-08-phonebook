import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';
import backgroundColor from '../../Assets/img/background.png';

export const ModalBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundColor});
  position: fixed;
  top: 40px;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  @media (${breakpoints.mobile}) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  @media (${breakpoints.minTablet}) {
    padding: 34px 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 580px;
    padding: 34px 40px;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  }

  @media (${breakpoints.desktop}) {
    width: 672px;
    height: 573px;
    padding: 64px 82px;
  }
`;
