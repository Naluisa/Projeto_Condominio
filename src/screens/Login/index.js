import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container,
InputArea,
CustomButton,
CustomButtonText,
LoginMensagemButton,
LoginMensagemButtonText,
LoginMensagemButtonTextBold } from './styles';

import Componente from '../../assets/Componente.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import LoginInput from '../../components/LoginInput';


export default () => {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    return(
        <Container>
            <Componente width="100%" height="160"/>

            <InputArea>
                <LoginInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <LoginInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setEmailField(t)}
                    password={true}
                />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <LoginMensagemButton>
                <LoginMensagemButtonText>Ainda não possui uma conta?</LoginMensagemButtonText>
                <LoginMensagemButtonTextBold>Cadastre-se</LoginMensagemButtonTextBold>
            </LoginMensagemButton>

        </Container>
    );
}