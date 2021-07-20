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
import PersonIcon from '../../assets/person.svg';
import HouseIcon from '../../assets/house.svg';

import LoginInput from '../../components/LoginInput';


export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [numberField, setNumberField] = useState('');

    const handleLoginClick = () => {

    } 

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }

    return(
        <Container>
            <Componente width="100%" height="160"/>


            <InputArea>
                <LoginInput 
                    IconSvg={PersonIcon}
                    placeholder="Nome Completo"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

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
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                 <LoginInput 
                    IconSvg={HouseIcon}
                    placeholder="Nº Apartamento"
                    value={numberField}
                    onChangeText={t=>setNumberField(t)}
                />

                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            <LoginMensagemButton onPress={handleMessageButtonClick}>
                <LoginMensagemButtonText>Já possui uma conta?</LoginMensagemButtonText>
                <LoginMensagemButtonTextBold>Faça Login</LoginMensagemButtonTextBold>
            </LoginMensagemButton>

        </Container>
    );
}
