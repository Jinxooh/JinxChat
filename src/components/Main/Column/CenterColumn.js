import React from 'react';
import { Card } from 'semantic-ui-react';

const CenterColumn = ({children}) => {
  return (
    <Card.Group>
      {children}
    </Card.Group>
  );
};

export default CenterColumn;