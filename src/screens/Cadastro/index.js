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
import IconePessoa from '../../assets/person.svg';
import IconeCasa from '../../assets/house.svg';

import LoginInput from '../../components/LoginInput';


export default () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
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
            <Logo width="100%" height="160"/>


            <AreaInput>
                <LoginInput 
                    IconSvg={IconePessoa}
                    placeholder="Nome Completo"
                    value={nome}
                    onChangeText={t=>setNome(t)}
                />

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
                 <LoginInput 
                    IconSvg={IconeCasa}
                    placeholder="Nº Apartamento"
                    value={numberField}
                    onChangeText={t=>setNumberField(t)}
                />

                <BotaoCustomizado onPress={handleLoginClick}>
                    <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
                </BotaoCustomizado>

            </AreaInput>

            <BotaoMensagemLogin onPress={handleMessageButtonClick}>
                <TextoMensagemBotao>Já possui uma conta?</TextoMensagemBotao>
                <TextoNegritoMensagemBotao>Faça Login</TextoNegritoMensagemBotao>
            </BotaoMensagemLogin>

        </Container>
    );
}

