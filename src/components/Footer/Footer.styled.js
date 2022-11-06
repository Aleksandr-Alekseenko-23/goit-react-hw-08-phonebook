import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const FooterWrappen = styled.footer`
  flex-shrink: 0;
  border-top: 1px solid rgba(236, 236, 236, 1);
`;

export const LogoWrappen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const WrapperMob = styled(Wrapper)`
  gap: 30px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Item = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: white;

  &:last-child {
    margin-right: 0;
    padding: 0;
  }
`;

export const LogoImg = styled.img`
  display: block;
`;

export const LinkGoIT = styled.a`
  padding: 0;
  margin-left: 5px;
  margin-right: 5px;
  outline: none;
  text-decoration: none;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListMob = styled(List)`
  justify-content: center;
  padding: 0;
`;

export const Button = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  font-size: 16px;
`;
