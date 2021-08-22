import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Container,
AreaInput,
BotaoCustomizado,
TextoBotaoCustomizado,
BotaoMensagemLogin,
TextoMensagemBotao,
TextoNegritoMensagemBotao } from './styles';

import Logo from '../../assets/Logo.svg';
import IconeEmail from '../../assets/email.svg';
import IconeCadeado from '../../assets/lock.svg';

import LoginInput from '../../components/LoginInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {auth} from '../../services/config';


export default () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleLoginClick = () => {
        if(email !== '' && senha !== ''){
            auth.signInWithEmailAndPassword(email, senha).then(userCredential => {
                console.log('userCredential', userCredential)
                AsyncStorage.setItem('email', email);
               AsyncStorage.setItem('@SalvaLogin', JSON.stringify(userCredential)).then(()=> {
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('MainTab');
               })

            });
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
            <Logo width="100%" height="160"/>

            <AreaInput>
                <LoginInput 
                    IconSvg={IconeEmail}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={t=>setEmail(t)}
                />

                <LoginInput 
                    IconSvg={IconeCadeado}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChangeText={t=>setSenha(t)}
                    password={true}
                />

                <BotaoCustomizado onPress={handleLoginClick}>
                    <TextoBotaoCustomizado>LOGIN</TextoBotaoCustomizado>
                </BotaoCustomizado>

            </AreaInput>

            <BotaoMensagemLogin onPress={handleMessageButtonClick}>
                <TextoMensagemBotao>Ainda não possui uma conta?</TextoMensagemBotao>
                <TextoNegritoMensagemBotao>Cadastre-se</TextoNegritoMensagemBotao>
            </BotaoMensagemLogin>

        </Container>
    );
}