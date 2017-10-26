import React from 'react';
import { Grid } from 'semantic-ui-react';

const CenterColumn = ({children}) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
    {children}
    </Grid.Column>
  );
};

export default CenterColumn;