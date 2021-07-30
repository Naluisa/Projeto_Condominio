import React from 'react';
import { Container,
AreaBotao,
BotaoSair,
TextoBotao } from './styles';

export default () => {
    return (
        <Container>
            <AreaBotao>
                <BotaoSair/>
                <TextoBotao>Sair</TextoBotao>
            </AreaBotao>
        </Container>
    );
}