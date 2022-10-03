import { LinkHome, Item, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <LinkHome to="contacts">Phonebook</LinkHome>
        </Item>
      </List>
    </nav>
  );
};
