import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base';

export default class IconTextLink extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Button iconLeft light>
                        <Icon type="FontAwesome" name="home" />
                    </Button>
                </Content>
            </Container>
        );
    }
}