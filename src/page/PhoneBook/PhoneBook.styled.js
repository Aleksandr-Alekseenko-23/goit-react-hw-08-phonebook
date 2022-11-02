import styled from 'styled-components';
import { breakpoints } from '../../components/Utils/Breakpoints';

export const TitleOne = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  @media ${breakpoints.minTablet} {
    font-size: 48px;
    margin-bottom: 20px;
  }
  @media ${breakpoints.desktop} {
    font-size: 72px;
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
  border: none;
  background-color: transparent;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
