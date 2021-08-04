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
import CapacidadeIcone from '../../assets/capacidade.svg';
import DescricaoIcone from '../../assets/descricao.svg';
import PredioIcone from '../../assets/predio.svg';

import LoginInput from '../../components/LoginInput';
import {firestore, database} from '../../services/config';


export default () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capacidade, setCapacidade] = useState('');

    const CadastraAmbiente = () => {
        database.firestore().collection('Ambiente').add({nome:nome, descricao:descricao, capacidade:capacidade});
    } 

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }
    function writeUserData(userId, nome, descricao, capacidade) {
        firebase.database().ref('ambiente/' + userId).set({
          nome,
          descricao,
          capacidade 
        });
      }
    return(
        <Container>
            <Logo width="100%" height="160"/>   

            <AreaInput>
                <LoginInput 
                    placeholder="Nome do Ambiente"
                    value={nome}
                    onChangeText={t=>setNome(t)}
                />

                <LoginInput 
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={t=>setDescricao(t)}
                />

                <LoginInput 
                    placeholder="Capacidade Máxima"
                    value={capacidade}
                    onChangeText={t=>setCapacidade(t)}
                    password={true}
                />

                <BotaoCustomizado onPress={CadastraAmbiente}>
                    <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
                </BotaoCustomizado>

            </AreaInput>

            

        </Container>
    );
}

