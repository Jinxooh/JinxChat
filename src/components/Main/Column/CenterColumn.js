import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const CenterColumn = ({children}) => {
  return (
    <Grid.Column width={11}>
      <Card.Group>
        {children}
      </Card.Group>
    </Grid.Column>
  );
};

export default CenterColumn;