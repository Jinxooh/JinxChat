import React, { Component } from 'react';
import Main, 
{   LeftColumn, 
    RightColumn, 
    CenterColumn, 
    Menu, 
    Recent, 
    CardContent,
} from 'components/Main/Main';

class MainRoute extends Component {
    render() {
        return (
            <Main>
                <LeftColumn>
                    <Menu>
                    </Menu>
                </LeftColumn>
                <CenterColumn>
                    <CardContent>
                    </CardContent>
                    <CardContent>
                    </CardContent>
                    <CardContent>
                    </CardContent>
                </CenterColumn>
                <RightColumn>
                    <Recent>
                    </Recent>
                </RightColumn>
            </Main>
        );
    }
}

export default MainRoute;