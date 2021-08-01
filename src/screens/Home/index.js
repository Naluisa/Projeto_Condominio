import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
Scroller,
HeaderArea,
HeaderTitle,
SearchButton,
LocationArea,
LocationInput,
LocationFinder,
ListArea } from './styles';

import MenuItem from '../../components/MenuItem'

import SearchIcon from '../../assets/procurar.svg';
import MyLocationIcon from '../../assets/procurar.svg'

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