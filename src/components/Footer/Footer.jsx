import React from 'react';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import {
  FooterWrappen,
  Wrapper,
  List,
  Item,
  LogoWrappen,
  LogoImg,
  LinkGoIT,
} from './Footer.styled.js';
import { ReactComponent as LinkedIn } from '../../Assets/img/linkedin.svg';
import { ReactComponent as Github } from '../../Assets/img/github.svg';

function Footer() {
  return (
    <FooterWrappen>
      <Container>
        <LogoWrappen>
          <Logo />
          <Wrapper>
            Made by
            <LinkGoIT href="https://goit.ua/">
              <LogoImg
                src="https://goit.ua/wp-content/themes/2/images/Layer.png"
                alt="логотип"
                width="100"
                height="30"
              />
            </LinkGoIT>
            student Alieksieienko O.
          </Wrapper>
          <List>
            <Item>
              <a className="Link" href="https://www.linkedin.com/feed/">
                <LinkedIn className="Logo" />
              </a>
            </Item>
            <Item>
              <a
                className="Link"
                href="https://github.com/Aleksandr-Alekseenko-23"
              >
                <Github className="Logo" />
              </a>
            </Item>
          </List>
        </LogoWrappen>
      </Container>
    </FooterWrappen>
  );
}

export default Footer;
