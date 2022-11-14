import styled from 'styled-components';
import { breakpoints } from '../../components/Utils/Breakpoints';

export const TitleOne = styled.h1`
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.sectionTitle};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.secondaryText};
  text-align: center;
  margin-bottom: ${p => `${p.theme.space[3]}px`};
  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xxxl};
    margin-bottom: ${p => `${p.theme.space[4]}px`};
  }
  @media ${breakpoints.desktop} {
    font-size: ${p => p.theme.fontSizes.title};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  @media ${breakpoints.onlyTablet} {
    flex-direction: column;
    align-items: center;
  }
  @media ${breakpoints.desktop} {
    justify-content: space-around;
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.transparent};
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
