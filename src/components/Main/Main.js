import React from 'react';
import Container from 'components/Common/Container';
import { Grid } from 'semantic-ui-react';

const Main = ({children}) => {
  return (
    <Container className="main">
      <Grid>
        {children}
      </Grid>
    </Container>
  );
};

export { default as LeftColumn } from './Column/LeftColum';
export { default as RightColumn } from './Column/RightColumn';
export { default as CenterColumn } from './Column/CenterColumn';

export default Main;