import React from 'react';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import {
  FooterWrapper,
  Wrapper,
  List,
  Item,
  LogoWrapper,
  LinkGoIT,
  Button,
  WrapperMob,
  ListMob,
  ButtonImg,
} from './Footer.styled.js';
import { ReactComponent as LinkedIn } from '../../Assets/img/linkedin.svg';
import { ReactComponent as Github } from '../../Assets/img/github.svg';
import useMatchMedia from '../../hooks/UseMatchMedia';
import useToggleModal from '../../hooks/UseToggleModal';
import Modal from '../Modal/Modal';
import { ButtonCloseModal } from '../UpdateContactsForm/UpdateContactsForm.styled';
import Close from '../../Assets/img/Delete.svg';

function Footer() {
  const { isMobile } = useMatchMedia();
  const { isFooterOpen, toggleFooterModal } = useToggleModal();

  return (
    <FooterWrapper>
      <Container>
        <LogoWrapper>
          <Logo />

          {!isMobile ? (
            <>
              <Wrapper>
                Made by
                <LinkGoIT
                  href="https://goit.ua/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
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
                  <a
                    className="Link"
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn className="Logo" />
                  </a>
                </Item>
                <Item>
                  <a
                    className="Link"
                    href="https://github.com/Aleksandr-Alekseenko-23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="Logo" />
                  </a>
                </Item>
              </List>
            </>
          ) : (
            <Button onClick={() => toggleFooterModal()}>Created</Button>
          )}

          {isMobile && isFooterOpen && (
            <>
              <Modal>
                <ButtonCloseModal type="button" onClick={toggleFooterModal}>
                  <ButtonImg src={Close} alt="Close" />
                </ButtonCloseModal>
                <WrapperMob>
                  Made by
                  <LinkGoIT
                    href="https://goit.ua/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://goit.ua/wp-content/themes/2/images/Layer.png"
                      alt="логотип"
                      width="100"
                      height="30"
                    />
                  </LinkGoIT>
                  student Alieksieienko O.
                </WrapperMob>
                <ListMob>
                  <Item>
                    <a
                      className="Link"
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedIn className="Logo" />
                    </a>
                  </Item>
                  <Item>
                    <a
                      className="Link"
                      href="https://github.com/Aleksandr-Alekseenko-23"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="Logo" />
                    </a>
                  </Item>
                </ListMob>
              </Modal>
            </>
          )}
        </LogoWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
