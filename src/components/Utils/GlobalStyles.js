import { createGlobalStyle } from 'styled-components';
import background from '../../Assets/img/BookshelfWallpaper.jpg';

export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${background});
  background-repeat: repeat-x;
  background-size: auto 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: orange;
}

p {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  padding: 0;
}

.Logo {
  fill: orange;
  width: 20px;
  height: 20px;

  transition-property: background-color, fill;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.Link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 100%;
  height: 100%;

  transition-property: background-color, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.Link:hover .Logo,
.Link:focus .Logo {
  background-color: orange;
  fill: white;
}

.Link:hover,
.Link:focus {
  background-color: orange;
}

.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

`;
