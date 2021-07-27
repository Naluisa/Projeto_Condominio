import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;
const Avatar = styled.TouchableOpacity`
width: 88px;
    height: 88px;
    border-radius: 20px;
`;
const InfoArea = styled.TouchableOpacity`
margin-left: 20px;
    justify-content: space-between;
    `;
const Nome = styled.TouchableOpacity`
font-size: 17px;
    font-weight: bold;
`;


export default ({}) => {
    return (
        <Area>
            <Avatar/>
            <InfoArea>
                <Nome></Nome>
            </InfoArea>
            <Avatar/>
        </Area>
    );
}