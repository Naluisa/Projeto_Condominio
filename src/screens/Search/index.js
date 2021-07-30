import React from 'react';
import { Container,
AreaHeader,
InputPesquisa } from './styles';

export default () => {
    return (
        <Container>
            <AreaHeader>
                <InputPesquisa
                    placeholder="O que você deseja?"
                    placeholderTextColor="#FFFFFF"/>
            </AreaHeader>
        </Container>
    );
}