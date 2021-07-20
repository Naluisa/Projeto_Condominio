import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #27323D;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding:40px;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color:#FE5F55;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: white;
`;

export const LoginMensagemButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const LoginMensagemButtonText = styled.Text`
    font-size: 16px;
    color: white;
`;
export const LoginMensagemButtonTextBold = styled.Text`
    font-size: 16px;
    color: white;
    font-weight: bold;
    margin-left: 5px;
`;
