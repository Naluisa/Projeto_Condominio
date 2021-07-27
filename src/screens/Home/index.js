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
                    <HeaderTitle numberOfLines={2}>Divirta-se com seus amigos e familiares!!</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}> 
                        <SearchIcon  width="26" height="26" fill="#FFFFFF"/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="O que você deseja?"
                        placeholderTextColor="#FFFFFF"/>
                    <LocationFinder>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF"/>
                    </LocationFinder>
                </LocationArea>

                <ListArea>
                    <MenuItem/>
                </ListArea>
            </Scroller>
        </Container>
    );
}