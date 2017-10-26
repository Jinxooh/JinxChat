import React from 'react';
import Container from 'components/Common/Container';
import { Grid } from 'semantic-ui-react';

const Main = ({children}) => {
  return (
    <Container className="main">
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Main;