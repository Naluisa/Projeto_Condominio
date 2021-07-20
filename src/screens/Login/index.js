import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
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

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleLoginClick = () => {
        if(emailField != '' && passwordField != ''){

        }else{
            alert("Preencha os campos");
        }
    } 

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Cadastro'}]
        });
    }

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

                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <LoginMensagemButton onPress={handleMessageButtonClick}>
                <LoginMensagemButtonText>Ainda não possui uma conta?</LoginMensagemButtonText>
                <LoginMensagemButtonTextBold>Cadastre-se</LoginMensagemButtonTextBold>
            </LoginMensagemButton>

        </Container>
    );
}