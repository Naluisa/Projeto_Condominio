import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
Scroller,
HeaderArea,
HeaderTitle,
ListArea } from './styles';

import MenuItem from '../../components/MenuItem'


export default () => {

    const navigation = useNavigation();
    
    return (
        <Container>
            <Scroller>  
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Seja Bem-Vindo! O que você deseja?</HeaderTitle>
                </HeaderArea>

                <ListArea>
                    <MenuItem/>
                </ListArea>
            </Scroller>
        </Container>
    );
}