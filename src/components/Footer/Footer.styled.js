import styled from 'styled-components';

export const FooterWrappen = styled.footer`
  display: flex;
  justify-content: space-between;
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
  justify-content: center;
  align-items: center;
  min-height: 44px;
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
  }
`;

export const LogoImg = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 0;
`;

export const LinkGoIT = styled.a`
  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
