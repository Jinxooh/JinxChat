import React from 'react';
import { Grid } from 'semantic-ui-react';

const RightColumn = ({children}) => {
  return (
    <Grid.Column only='computer'>
    {children}
    </Grid.Column>
  );
};

export default RightColumn;