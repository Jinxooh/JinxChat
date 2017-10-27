import React from 'react';
import Container from 'components/Common/Container';
import { Card } from 'semantic-ui-react';

const Main = ({children}) => {
  return (
    <Container className="main">
      <Card.Group>
      {children}
      </Card.Group>
    </Container>
  );
};

export { default as LeftColumn } from './Column/LeftColum';
export { default as RightColumn } from './Column/RightColumn';
export { default as CenterColumn } from './Column/CenterColumn';
export { default as Menu } from './Menu';
export { default as Recent } from './Recent';
export { default as CardContent } from './CardContent';

export default Main;