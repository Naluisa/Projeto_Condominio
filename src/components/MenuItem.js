import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const Nome = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;


export default ({}) => {
    const navigation = useNavigation();
    return (
        <Area>
            <Avatar/>
            <InfoArea>
                <Nome></Nome>
            </InfoArea>
        </Area>         
    );
}