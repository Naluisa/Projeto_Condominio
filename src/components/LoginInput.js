import React from 'react';
import styled from 'styled-components/native';

const AreaInput = styled.View`
    width: 100%;
    height: 60px;
    background-color: #37414B;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: white;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return(
        <AreaInput>
            <IconSvg width="24" height="24" fill="white"/>
            <Input
                placeholder={placeholder}
                placeholderTextColor="white"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </AreaInput>
    );
}