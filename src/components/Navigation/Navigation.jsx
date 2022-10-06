import { LinkHome, Item, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <LinkHome to="contacts">Contacts</LinkHome>
        </Item>
      </List>
    </nav>
  );
};
