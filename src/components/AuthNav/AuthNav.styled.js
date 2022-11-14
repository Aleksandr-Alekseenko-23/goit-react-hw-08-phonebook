import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { GiHamburgerMenu } from 'react-icons/gi';

export const appearDuration = 300;

export const MobMenuButton = styled.button`
  margin-left: auto;
  background-color: ${p => p.theme.colors.button.primaryBtnBackground};
  border: ${p => p.theme.borders.none};
`;

export const MobMenuClose = styled(TfiClose)`
  &.exampleEnter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.exampleEnterActive {
    opacity: 1;
    transform: rotate(90deg);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }
  &.exampleExit {
  }
  &.exampleActive {
  }
`;

export const MobHamburgerMenuClose = styled(GiHamburgerMenu)`
  &.exampleEnter {
  }
  &.exampleEnterActive {
  }
  &.exampleExit {
    opacity: 0;
  }
  &.exampleActive {
    opacity: 1;
    animation: rotateX 1500ms;
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
    @keyframes rotateX {
      0% {
        transform: rotateX(90deg);
      }

      100% {
        transform: rotateX(0deg);
      }
    }
  }
`;
