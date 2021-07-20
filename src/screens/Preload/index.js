import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import Componente from '../../assets/Componente.svg';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default() => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar o token
            }else{
                navigation.navigate("Login");
            }
        }
        checkToken();
    }, []);
    return(
        <Container>
            <Componente width="100%" height="160"/>
            <LoadingIcon size="large" color="white"/>
        </Container>
    );
}