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
ListArea, Title } from './styles';

import MenuItem from '../../components/MenuItem'
import { nativeViewProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Scroller>  
                <ListArea>

                    <MenuItem/>
                </ListArea>
            </Scroller>
        </Container>
    );
}